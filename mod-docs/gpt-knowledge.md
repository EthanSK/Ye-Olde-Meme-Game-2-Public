# Introduction

Ok, so I was about to release my game, then I had an epiphany and realised I should add modding support, so I began that journey, and then accidentally went _way_ too deep, as I always do. I do love feature creep. But here we are (and in hindsight, now that it's done, i'm _so_ glad I decided to do it, ModScripting in Ye Olde Meme Game 2 is insane.)

## Welcome to Ye Olde Meme Game 2

<div className="centered-container">
  <img
    src={require("/img/MemeorangMan.png").default}
    alt="Memeorang man"
    width="100"
  />
</div>
<br />

Ye Olde Meme Game 2 (YOMG2) is a 2D platform game where everything is a meme. Not only is there a Campaign mode with a story and lore, but there is an entire Level Builder where you can make your own levels and share them with the world - kinda like Mario Maker. But with memes. And better.

The Level Builder has an "experimental mode" option that gives you way more freedom to design your levels, including the ability to write code to manipulate pretty much everything in the game. I call it "ModScripting", and this documentation aims to teach you everything about it.

My approach to ModScripting is to give you as much freedom as possible by exposing all the code in the Unity Game Engine, and in Meme Game, while providing limitations only for the [safety and security](guides/safety-and-security) of players.

So with that in mind, I haven't been able to test every little thing since there are so many possibilites, so i'm relying on you to help build a strong modding [community](guides/community).

## Download the game

You can download the game on [Steam](https://store.steampowered.com/app/1145940/Ye_Olde_Meme_Game_2/), or iOS and Android.

You can also create mods on any platform, but good luck coding with the on-screen mobile keyboard. You could connect a bluetooth keyboard to ur phone tho ig.

import DocsImage from "@site/src/components/DocsImage";

# Prerequisites

## Lua

<DocsImage
  src={require("/img/lua-logo.png").default}
  width={200}
  link="https://www.lua.org"
        alt="Lua"

/>

<br />

The only thing you really need to know to get started is the [Lua](https://www.lua.org/manual/5.4/manual.html) programming language. It's a very easy and popular scripting language that's used for modding in many games, such as [Roblox](https://www.roblox.com/). There should be tons of tutorials online, so go learn it!

## Unity

<DocsImage
  src={require("/img/unity-logo.png").default}
  width={200}
  link="https://www.unity.com"
        alt="Unity"

/>

<br />

Ye Olde Meme Game 2 is developed in the Unity game engine. Pretty much all of Unity's components should be available for you to create, access, modify, and destroy. So while you don't _need_ to know Unity, it would be quite helpful. However, you can also get by by consulting the [Unity Manual](https://docs.unity3d.com/Manual/index.html) or asking [ChatGPT](https://chat.openai.com/) or the community.

Unity uses [C#](https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/) as its programming language, so some knowledge of C# may be helpful for things like understanding how members of Components work, and better understanding the [API Reference](/docs/guides/api-reference). But it's by no means required for basic modding, and you should be able to learn on the go. You must also be comfortable asking ChatGPT about Unity and C# stuff when needed. ModScripting is an opportunity for you to grow as a programmer if you aren't already a 10X 😒

## MoonSharp

<DocsImage
  src={require("/img/moonsharp-logo.png").default}
  width={200}
  link="https://www.moonsharp.org/"
  alt="Moonsharp"

/>

<br />

So some absolute legend went and wrote an interpreter for Lua **entirely** in C#. That interpreter is called [Moonsharp](https://www.moonsharp.org/), and it's what we use to run Lua scripts in Ye Olde Meme Game 2. You don't need to know about it, but especially for advanced users, if you run into any weird issue or want to find out more about why you have to write your ModScripts the way you do, you can check out the documentation [here](https://www.moonsharp.org/getting_started.html).

import DocsImage from "@site/src/components/DocsImage";

# Basic Example

I'll go through a quick walkthrough to get you familiar with the end-to-end flow of ModScripting.

## Changing Memeorang Man's Gravity

1. First, open the Level Builder, and open the level options panel:

   <DocsImage src={require("./img/level options.png").default} width={400} />

2. Enable experimental features:

   <DocsImage
     src={require("./img/experimental features enable.png").default}
     width={500}
   />

3. Exit the level options panel, then find and click on Memeorang Man. Then click the blue script button:

   <DocsImage
     src={require("./img/memeorang man modscript button.png").default}
     width={600}
   />

4. Create a new ModScript, and you'll see something like this:

   <DocsImage src={require("./img/empty editor.png").default} width={800} />

5. Open the API Reference, and find the `gravityScale` field of the `Player`'s `Rigidbody2D` component:

   <DocsImage
     src={require("./img/gravity scale api reference.png").default}
     width={900}
   />

6. Click the `Copy Example` button:

   <DocsImage
     src={require("./img/copy example button.png").default}
     width={400}
   />

7. Paste that example into the script editor, and add the line `memeorangManRigidbody2D.gravityScale = 0.069` at the end to change the gravity:

   <DocsImage
     src={require("./img/editor gravity example.png").default}
     width={1200}
   />

8. Now exit the ModScript panel, and enter play mode. You should see low gravity while jumping with Memeorang Man. Congratulations.

# Considerations

Before you go ahead and start creating mods, here are a few important things to consider:

- I'm trying to give you as much freedom to do whatever you want as possible. There is obviously a lot of room for abuse, so it's your responsibility to make sure your level plays well, and is a fun experience for other players.

- If ur a n00b, you'll probably find it very useful to interact with the [community](/docs/guides/community) and use Community Mods as a starting point.

- I strongly recommend you go through the tutorial in order, I reckon you'll become a modding _beast_ by the end of it (and plus I spent a lot of time curating these docs).

Go crazy.

Go stupid.

Ah.

import DocsImage from "@site/src/components/DocsImage";

# Game Structure

## Unity's Structure

First, a little bit about how the Unity game engine works.

In Unity, everything in the scene is a `GameObject`.

These GameObjects have a bunch of `Components` that give it a specific behaviour, like movement, collisions, attacking, etc.

A `Component` is essentially a C# class.

A class is basically a collection of data (`member variables`), and functions (`member methods`) that acts on and modifies that data.

So for example, in the [basic example](/docs/getting-started/basic-example), you saw the `gravityScale` member variable of the `Rigidbody2D` Component being used.

In the Unity Editor UI, here's what it would look like to set the value of the `gravityScale` `member variable` on the `RigidBody2D` Component attached to the `Player` GameObject.

<DocsImage
  src={require("./img/rigidbody on player example.png").default}
  width={800}
/>

<br />

For `member methods`, an example of something you might call (in C#) on this `RigidBody2D` Component might be:

```csharp
playerRigidbody.AddForce(new Vector2(69, 420))
```

Also, `GameObjects` can be nested under each other as children, so for example there might be a `Right Leg` child GameObject under the root `Player` GameObject:

<DocsImage
  src={require("./img/unity gameobject hierarchy example.png").default}
  width={400}
/>

Which means the GameObject named `Right Leg` will have its position, rotation, and size be based on the `Player` GameObject.

That's pretty much it for the fundamentals of how Unity works.

## Meme Game Structure

OK, so that's Unity. But how about Ye Olde Meme Game 2? Well, YOMG2 basically adds a thin layer on top of Unity. And that layer is `MemeItems`.

In your level that you build, you add a bunch of `MemeItems` to it, e.g. `Memeorang Man`, `Ohio`, `John Xina`, or `Stonks`.

Whenever you create a `ModScript`, it must be added to a `MemeItem` that's in your level.

Each `MemeItem` in your level consists of a root GameObject, and sometimes some child GameObjects.

And that's kinda it. Just so you know, behind the scenes, each MemeItem has a `MemeItem` Component that I made, as well as some other specific Components that causes the MemeItem to behave like it does, but you'll figure all that out by playing around with modding and reading these docs.

## The glue between UNity and MemeItems

The way the modding system glues `Unity` and `MemeItems` together is as follows:

From your ModScript, you retrieve some `MemeItem` in the level, then access some parent or child `GameObject` on that `MemeItem`, then access any `Component` on that `GameObject`.

Now you can interact with any `member variable` or `method` on that `Component`.

<br />

Now with that said, let's take a look at the API Reference, which should help you visualize all this better.

import DocsImage from "@site/src/components/DocsImage";

# API Reference

This is the API Reference:

<DocsImage
  src={require("./img/player weapons api reference.png").default}
  width={1000}
/>

<br />

It's an in-game, auto-generated, fully-interactable documentation of everything you can use in your ModScripts, right where you need it. Pretty cool.

In the leftmost column, you'll see all the MemeItems in the game that you can retrieve in your ModScripts.

In the column just to the right of it, you'll see the hierarchy of parent & child GameObjects that the selected MemeItem consists of.

Then in the colmun next to that, you'll see all the Components attached to the selected GameObject.

Then the last column shows all the member variables (fields and properties), methods, and events on the selected Component.

And all the way on the right, you have the member info section.

## Member Info Section

This section shows you everything you need to know about the selected member, and how you can use it in your ModScripts.

This is where a little C# knowledge might come in handy.

### Fields

`Fields` are simplest kind of member, and the info section will just show the type of the field. That is all.

<DocsImage
  src={require("./img/field member info api reference.png").default}
  width={300}
/>

### Properties

A `property` is like a field, except it also specifies if you're allowed to just read it, or if you can also write to it. This is shown by the `Get` and `Set` labels. Properties with just `Get` means you can only read it.

<DocsImage
  src={require("./img/property member info api reference.png").default}
  width={300}
/>

### Methods

A `method` is a function on a Component that you can invoke. The info section will show you the parameters it takes as input, and the return type of the output.

<DocsImage
  src={require("./img/method member info api reference.png").default}
  width={300}
/>

### Events

An `event` is a special kind of member that you can subscribe to in your ModScript, and then you create an event handler that is called whenever the event gets triggered.

The info section for an event shows you the type of the event (which you don't really need to care about), and the parameters your event handler function needs to take as input.

For your convenience, it also shows you more information about the second parameter of your event handler, since this is what you'll actually be using to access information passed by the event.

<DocsImage
  src={require("./img/event member info api reference.png").default}
  width={300}
/>

<br />

More information about events can be found [here](/docs/guides/events).

### Detailed Type Info

You may have noticed that some types in the info section are underlined with a darker shade of blue. This means you can click on it to see more detailed information about that type.

<div className="centered-container" style={{gap: '2em'}}>
<DocsImage
  src={require("./img/player info type.png").default}
  width={300}
  preventCenteredLayout={true}
/>

<DocsImage
  src={require("./img/player info detailed type info.png").default}
  width={300}
  preventCenteredLayout={true}
/>

</div>

### Auto-generated Example

Every member you select in the API reference also has an auto-generated example that you can copy and paste as a starting point.

The example will usually just be code to print out the member's value to the [console](/docs/guides/error-handling#console), so it's not really useful as an actual complete ModScript, but it helps give you boilerplate code to start with.

<DocsImage
  src={require("./img/member example api reference.png").default}
  width={300}
/>

As you can also see, there are sometimes some useful buttons to open the relevant Unity documentation for the selected thing.

:::note
The API reference is completely auto-generated and some stuff might be wrong, especially in the auto-generated example, so don't take it as gospel.

import DocsImage from "@site/src/components/DocsImage";

# ModScript Structure

Let's talk a bit about how ModScripts are created, organized, and executed within the Level Builder.

## ModScript Panel

The ModScript panel is where you organize and write all your code:

<DocsImage
  src={require("./img/modscript editor example.png").default}
  width={1000}
/>

On the left column, you have the "file" explorer, which shows all the ModScripts attached to the currently selected MemeItem. Each row has the ModScript title, and a number input field to set the execution order of the ModScript _within_ that MemeItem.

At the top, going from left to right, you have a button to add a new script to the MemeItem, a text input field to provide the ModScript's title, and buttons to open the [Community Mods](/docs/guides/community#community-mods) panel, the [API Reference](/docs/guides/api-reference) panel, and the website for this very tutorial thou art reading at present time GMT.

Then all the way on the right, there is a number input to set the execution order of the selected MemeItem. More on that soon.

There is also a dropdown at the top of the explorer to change the sort order the ModScripts show up:

<DocsImage
  src={require("./img/modscript explorer sort order.png").default}
  width={300}
/>

### Main Code Editor

Ok so the main code editor is very basic, providing simple syntax highlighting and undo & redo.

If you want better a better coding experience, you should probably use a good code editor that supports Lua, such as [VSCode](https://code.visualstudio.com/), and then copy and paste your Lua scripts into the in-game code editor.

These are the buttons to delete the open ModScript, and undo & redo:

<DocsImage
  src={require("./img/modscript editor delete script.png").default}
  width={200}
/>
<br />

:::tip

If you accidentally delete a ModScript, you can undo this by closing the ModScript panel, then clicking undo in the Level Builder.

:::

## Execution Order

I've briefly mentioned execution order, but here's a bit more explanation. Execution order is just the order your ModScripts run in, from the lowest number to the highest.

There are 2 layers of execution order.

1. The execution order of the MemeItem within the _level_,
   relative to other MemeItems. This is set by this number input field at
   the top right of the ModScript panel:

<DocsImage
  src={require("./img/execution order in level.png").default}
  width={400}
/>
<br />

2. The execution order of a ModScript within a _MemeItem_. This is set by this number input field in the explorer:

<DocsImage
  src={require("./img/explorer item execution order.png").default}
  width={400}
/>

<br />

When you start playing a level, the system goes through every MemeItem in order of execution for the level, and for each MemeItem it comes across, it runs each ModScript in order of execution for that MemeItem. Simple.

Execution order can be negative. It also doesn't have to be unique, but try and make sure two MemeItems don't have the same execution order, or two ModScripts within a MemeItem don't have the same execution order. If they do, make sure code from one of them doesn't rely on the result of code from another, or you might get ambiguous behaviour.

<br />

:::tip

If you want to write a ModScript that isn't necessarily related to a specific MemeItem, just add a dummy MemeItem to your level, maybe like
a `Meme Text` item you can label as something useful.

<DocsImage
  src={require("./img/dummy item for modscript.png").default}
  width={200}
/>
:::

:::info
All console output (from using `print` or error messages) is logged to the [in-game console](/docs/guides/error-handling#console), which can be opened by pressing "Open Console".

<div className="centered-container" style={{ gap: "2em" }}>
  <DocsImage
    src={require("./img/open console button.png").default}
    width={200}
    preventCenteredLayout={true}
  />
  <DocsImage
    src={require("./img/console example.png").default}
    width={600}
    preventCenteredLayout={true}
  />
</div>
This button only shows when your level has a ModScript in it.

:::

import DocsImage from "@site/src/components/DocsImage";
import { featureRequestUrl } from "@site/src/constants";
import Whitelist from "./whitelist.mdx";

# Types

Lua doesn't have a concept of types. But C# heavily relies on it. So we somehow need to bridge the gap.

## Register Type

If you want to use a member of some Component, you will first need to register the Component's type. This is done by calling the `registerType` function, and passing the type name as an argument.

For example, doing this will allow your script to use members of the `Rigidbody2D` Component:

```lua
registerType("Rigidbody2D")
```

`registerType` should be the first thing to check you haven't forgetten if you get an error.
And don't worry, it's ok if you register the type more than you need, you're not gonna get 'rona.

:::tip

You can register nested types by using '+'

```lua
registerType("EventsForModScript+Collision2DEventArgs")
```

:::

Usually, if you've forgotten to register a type, you'll get an error like this:

```
ScriptRuntimeException: cannot access field X of userdata<UnityEngine.Object>
```

or like this

```
ScriptRuntimeException: cannot convert clr type HealthChangedEventArgs
```

or maybe something else idk. But just always make sure you've registered the type before going down a rabbit hole of debugging.

:::info

If the type is not a YOMG2 type, or is not directly under the `UnityEngine` namespace, you have to provide the full namespace path, for example:

```lua
registerType("UnityEngine.U2D.Spline")
```

:::

## Get Type

The `getType` function is used to get a C# type for a given type name. Funnily enough, it's actually used by `registerType` under the hood. It's useful in a few scenarios.

Sometimes, when you are using some methods from, say, a `Unity Engine` Component, it expects a type as an argument.

Take this for example. This is how you'd normally add a new Component to a GameObject when coding a game in C#.

```csharp
gameObject.AddComponent(typeof(Light2D));
```

The `AddComponent` method you see here is also available for you to use in your ModScript. But notice how it takes a C# type as an argument.

Well in Lua, there are no types, so you wouldn't be able to call this method.

So I added a `getType` function that basically does the same thing. In your ModScript, you can do something like this:

```lua
gameObject.AddComponent(getType("UnityEngine.Rendering.Universal.Light2D"))
```

:::note
Type names use the class or struct name, not the C# type name. For example, a float is a `System.Single`, an int is a `System.Int32`, and a string is a `System.String`, etc.
:::

## Whitelist

For users safety, there is a whitelist that dictates what types you can use in your ModScripts

<Whitelist />
<br />

Overall, this is a very generous allowance, and should allow you to do pretty much anything you want. But if not, submit a <a target="_blank" href={featureRequestUrl}>feature request</a> and I'll try my _very best_ to add it.

It would be nice to just allow everything in a perfect world, but we need these limitations is in place for [security reasons](/docs/guides/safety-and-security).

:::tip
Make sure you look [Unity documentation](https://docs.unity.com/) whenever you want more information about a type (class/struct). They have very good docs and examples.
:::

import DocsImage from "@site/src/components/DocsImage";

# Getting Items

How do you actually connect your ModScript to a MemeItem? You use one of these functions:

## Get Current Item

To get the MememItem that the ModScript is attached to, you can use the `getCurrentItem` function in your script:

```lua {1}
local datBoi = getCurrentItem()

local datBoiSpriteRenderer = datBoi.GetComponent("SpriteRenderer")
registerType("SpriteRenderer")
datBoiSpriteRenderer.flipX = true
```

`getCurrentItem` returns the `GameObject` of the MemeItem.

## Get Item By ID

There are times where you might want a ModScript to access _another_ MemeItem. This is done by using `getItemById` and passing the ID.

```lua {1}
local chargeTheyPhone = getItemById("AllTheyKnowIsChargeTheyPhone-388114-933a")

local chargeTheyPhoneText = chargeTheyPhone.GetComponent("TMPro.TMP_Text")
registerType("TMPro.TMP_Text") -- TextMeshPro is weird, u gotta register like this. TMP_Text is the base type of all TextMeshPro components, apply similar logic to other erroring things in the future ig.
chargeTheyPhoneText.text = "reeeeeeepeeepeeepoopoo."
```

So every MemeItem in the level has a unique ID, and you can copy that ID by pressing the copy icon next to the ID at the top of the Level Builder UI:

<DocsImage src={require("./img/copy ID example.png").default} width={400} />

## Get Items By Type

There may also be times where you want to do something to multiple MemeItems of a certain type. You can do this by using the `getItemsByType` function and passing the `MemeId`, since "type" in this context just refers to what MemeItem it is:

```lua {1}
local chads = getItemsByType("Chad")

for i, chad in ipairs(chads) do
    local chadArm = chad.transform.Find("Chad/bone_1/bone_2/bone_11") -- transform is a special type that comes pre-registered so you don't have to :0
    chadArm.transform.localScale = chadArm.transform.localScale * 0.420
end
```

`getItemsByType` returns a List (auto-converted to a Lua table) of all the MemeItems in your level that match that type. You can loop through and filter them and do as you please.

<br />
<br />

:::tip
To keep a nice smooth framerate for the players of your level, it is important you cache as much as you can. Caching just means storing the result of an operation so it doesn't have to recalculate every time if it doesn't need to. Just store the result of getting an item into a variable, as shown above. More is discussed in the [performance](/docs/guides/performance#caching) section.
:::

import { featureRequestUrl } from "@site/src/constants";

# Constructors

In Lua, there is no `new` keyword, so you cannot construct new instances of classes or structs in your ModScripts. Now I could just create a function that lets you construct any type, but i don't think that's very safe.

But actually, on second thought, it's probably fine to do construction of _value types_ (structs), as long as they fall within the whitelist (described in the [types](/docs/guides/types#whitelist) section)

So, I created a helper function `createInstance` that takes a [type name](https://learn.microsoft.com/en-us/dotnet/framework/reflection-and-codedom/specifying-fully-qualified-type-names), and returns a new instance of that type.

```lua {4}
registerType('Player')
local player = getItemsByType("MemeorangMan")[1]

local newScale = createInstance("Vector3")
newScale.x, newScale.y, newScale.z = 0.4, 2, player.transform.localScale.z
player.transform.localScale = newScale
```

Notice how the values are assigned after construction. All structs in C# have a default parameterless constructor, why is why you can get away with just constructing from the struct type name alone. Pretty much all Unity structs should let you modify the member values after.

Some useful structs you may commonly use might include:

- `Vector2`
- `Vector3`
- `Quaternion`
- `Color`

...and more. Remember to consult the Unity [docs](https://docs.unity.com/) for more information

# Events

Events are a type of member on a C# class. You can subscribe to events in your ModScript to execute code in reaction to something happening.

Your event handler needs to have 2 parameters:

1. `sender` - The C# object that raised the event
2. `eventArgs` - An object that sometimes contains information about the event

## Subscribing to Events

To subscribe to an event, you need to first define the event handler function that runs in response to the event triggering:

```lua {8,15}
registerType("HealthChangedEventArgs")
registerType("IHasHealth")
registerType("Player")
registerType("Vector3")

local healthComponent = getCurrentItem().GetComponent("IHasHealth")

function healthChangedHandler(sender, eventArgs)
    local scale = healthComponent.transform.localScale
    local healthDecrease = eventArgs.OldHealth - eventArgs.NewHealth
    scale.x = scale.x + (0.069 * healthDecrease * Mathf.Sign(scale.x)) -- if scale is negative (coz item is facing other direction), we gotta subtract to make it wider
    healthComponent.transform.localScale = scale -- make size wider every time health changes. lol.
end

healthComponent.HealthChanged.add(healthChangedHandler)
-- REMEMBER TO UNSUBSCRIBE!!!! (see below)
```

:::note
You can only subscribe to events that match the standard EventHandler pattern (which is the case for all YOMG2 code), and meet [MoonSharp's event requirements](https://www.moonsharp.org/objects.html#events)
:::

## Unsubscribing from Events

It is extremely important you unsubscribe from all events you've subscribed to. Usually, you would do this when exiting the level, which is when the [`cleanup`](/docs/guides/lifecycle-events#cleanup) function is called, but you can do this whenever:

```lua {3}
-- ...code from above
function cleanup()
    healthComponent.HealthChanged.remove(healthChangedHandler)
end
```

import DocsImage from "@site/src/components/DocsImage";

# Lifecycle Events

A long time ago, you were born. You are also going to die. You also poo every day. These are lifecycle events.

GameObjects are like people. They have lifecycle events.

In ModScript land, these lifecycle events are split into 2 categories:

1. ModScript-defined handlers
2. `EventsForModScript` Component

The reason for this split is performance and convenience related.

## ModScript-defined handlers

There are 4 ModScript-defined handlers you can implement in your ModScripts:

1. `update()` - called every frame (fps can vary dramatically)
2. `fixedUpdate()` - called every physics step (fixed at 30fps)
3. `lateUpdate()` - called every frame, after all `update`s have been called across all scripts
4. `cleanup()` - called when exiting the level

Just define them as normal Lua functions in your ModScript, and they will be called automatically at the appropriate time.

```lua
function lateUpdate()
  -- do stuff at the end of every frame. be very careful about performance
end
```

### Cleanup

The `cleanup` function gets called when "exiting the level", in the same order as the scripts were started.

```lua
function cleanup()
  -- unsubscribe from all events here with <some event>.remove()
end
```

In this context "exiting the level" means:

- Level Builder: after exiting play mode
- Play Created Level: after leaving the scene

:::warning
Make sure you cleanup _all_ events you subscribed to in your scripts, and everything else that's appropriate, or you will cause memory leaks and it will degrade [performance](/docs/guides/performance).
:::

## EventsForModScript Component

All the other lifecycle events you'd normally use in Unity are implemented in a separate Component in the YOMG2 codebase, called `EventsForModScript`.

It hooks Unity's [lifecycle events](https://docs.unity3d.com/Manual/ExecutionOrder.html) up to native C# events, which is covered in the [Events](/docs/guides/events) section.

Here are all the events you can subscribe to, copied and pasted from the C# Component directly:

```csharp
public event EventHandler AwakeEvent = delegate { };
public event EventHandler StartEvent = delegate { };
public event EventHandler OnDestroyEvent = delegate { };

public event EventHandler OnEnableEvent = delegate { };
public event EventHandler OnDisableEvent = delegate { };

public class CollisionEventArgs : EventArgs { public Collision2D Other { get; set; } }
public class ColliderEventArgs : EventArgs { public Collider2D Other { get; set; } }

public event EventHandler<CollisionEventArgs> OnCollisionEnterEvent = delegate { };
public event EventHandler<CollisionEventArgs> OnCollisionExitEvent = delegate { };
public event EventHandler<CollisionEventArgs> OnCollisionStayEvent = delegate { };

public event EventHandler<ColliderEventArgs> OnTriggerEnterEvent = delegate { };
public event EventHandler<ColliderEventArgs> OnTriggerExitEvent = delegate { };
public event EventHandler<ColliderEventArgs> OnTriggerStayEvent = delegate { };

public event EventHandler OnMouseUpEvent = delegate { };
public event EventHandler OnMouseDownEvent = delegate { };
public event EventHandler OnMouseDragEvent = delegate { };
```

You'll need to add the `EventsForModScript` to your GameObject that you want events on, like in this example:

```lua {8,15,18}
registerType("EventsForModScript")
registerType("EventsForModScript+CollisionEventArgs")
registerType("Collision2D")
registerType("MemeItem")
registerType("AbstractMemeItemData")

local curItem = getCurrentItem()
local events = curItem.AddComponent(getType("EventsForModScript"))

function collisionHandler(sender, eventArgs)
    local otherCollider = eventArgs.Other -- look at CollisionEventArgs pasted above
    print("other collision: ", otherCollider.gameObject.GetComponent("MemeItem").Data.Name)
end

events.OnCollisionEnterEvent.add(collisionHandler)

function cleanup()
    events.OnCollisionStayEvent.remove(collisionHandler)
end
```

<details>
    <summary>Check out this in-depth diagram from the [Unity Documentation](https://docs.unity3d.com/Manual/ExecutionOrder.html) about lifecycle events and order of execution</summary>

<DocsImage
  src={"https://docs.unity3d.com/uploads/Main/monobehaviour_flowchart.svg"}
  width={1500}
/>

</details>

## ModScripts themselves

When the level starts being played, the ModManager in the game will go through all MemeItems with ModScripts in the level in execution order, and for each one, execute each ModScript in script execution order. As mentioned, the same order is used for [cleanup](#cleanup).

# Static Types

The way Moonsharp handles static members in a type is by providing access through an _instance_ of the type. Kinda weird, outta my control.

This means you'll have to create an instance just to access the static member.

And if you were paying attention in the section about [constructors](/docs/guides/constructors), you'll remember that you cannot construct an arbitrary reference type (class) from your ModScript.

So, I've manually gone and added some instances of important types containing static members that are used commonly used when coding a game in Unity:

## Special Types

### Time

`Time` contains a lot of useful static members for dealing with in-game global time related variables, such as `Time.deltaTime` for the amount of time passed since the last frame, the `Time.timeScale` to for how much slow-mo or speed-up there is, and a lot more (read the Unity [Time docs](https://docs.unity3d.com/ScriptReference/Time.html))

For example:

```lua {4}
local timeGoneBy = 0

function update()
    timeGoneBy = timeGoneBy + Time.deltaTime -- you could also just use Time.time for all this but this is a pedantic example.
end
```

### UnityObject

`UnityEngine.Object` (exposed as `UnityObject`) contains three important categories of static members: `Instantiate`, `Destroy`, and `FindXXX` methods.

For example:

```lua {6}
local existingFlappy = getItemsByType("FlappyBird")[1] -- requires flappy bird already in the level
local dummyQuaternion = createInstance("Quaternion")
local posOffset = createInstance("Vector3")
posOffset.x, posOffset.y = 2, 1

local flappyClone = UnityObject.Instantiate(
    existingFlappy,
    getItemsByType("MemeorangMan")[1].transform.position + posOffset,
    dummyQuaternion.identity, -- looky here, it's using a static member! (more on this later)
    existingFlappy.transform.parent)
```

Here's another noteworthy example:

```lua {3}
registerType("EnemyMovementController")

local enemyMovementControllers = UnityObject.FindObjectsByType(getType("EnemyMovementController"), 0);

for idx, enemyMovCtrl in ipairs(enemyMovementControllers) do
    print(enemyMovCtrl.MoveForce)
    enemyMovCtrl.MoveForce = 0 -- make all enemies not move
end
```

<details>
  <summary>resolveAsActualType</summary>

You may have noticed the use of `resolveAsActualType`. This is a little helper that internally just returns the type as a `System.Object`, to trick MoonSharp into resolving the type as the most derived type it can possibly be. Because here, `UnityObject.FindObjectsOfType`'s C# return type is `UnityEngine.Object[]`, even though the actual underlying type in memory is `EnemyMovementController[]`, which is the thing we want to use in the for loop. Otherwise, without it, you would get an error trying to access `MoveForce`.

</details>

### Physics2D

`Physics2D` contains a lot of useful static members for dealing with 2D physics as well. For example:

```lua {10}
registerType('Player')
registerType('PlayerInfo')
registerType('ContactPoint2D')

local player = getCurrentItem().GetComponent('Player')
local playerLeftFootCol = player.Info.LeftFootCollider
local contacts = createCollection('System.Collections.Generic.List`1[[UnityEngine.ContactPoint2D, UnityEngine]]')

function getPlayerLeftFootContacts(collider)
    Physics2D.GetContacts(collider, contacts)
    print("Number of contacts: ", contacts.Count)
    return contacts
end

invokeAfterTime(1, getPlayerLeftFootContacts, {playerLeftFootCol})
```

### Mathf

Another useful bad boy, `Mathf` exposes some static arithmetic members, such as

```lua {1}
local leCalculation = Mathf.Atan2(420, 69)
print("le calc ", leCalculation)
```

## Static Members

Ok, that was the explanation of static members on reference types that you aren't normally able to construct or gain a reference to. I constructed them for you 🥹.

Now how about static members on types you _are_ able to use in your ModScripts?

Well, you'll need an instance of the type to access them from, just like before. You can either [create the instance](/docs/guides/constructors) yourself if the type is a struct, or you'll need to get an instance using something like `GetComponent`

```lua {7}
local dummyVector2 = createInstance("Vector2")
local pointA, pointB = createInstance("Vector2"), createInstance("Vector2")

pointA.x, pointA.y = 6, 9
pointB.x, pointB.y = 4, 2

local distance = dummyVector2.Distance(pointA, pointB) -- normally accessed as Vector2.Distance in C# Unity
print("distance: ", distance)
```

So yeah.

# Coroutines

Coroutines are a way to schedule your code to execute after some time. There are 4 coroutines exposed for use in your ModScripts:

1. `invokeAfterTime`
2. `invokeAfterTimeRealtime`
3. `invokeAfterEndOfFrame`
4. `invokeAfterFixedUpdate`

## invokeAfterTime

`invokeAfterTime` is used to schedule a function after a specified amount of _in-game_ time. This means that if the `Time.timeScale` was altered to cause slow-motion or speed-up, the coroutine will execute slower or faster respectively.

```lua {5}
function someFunction(arg1, arg2)
    print("someFunction called with args: ", arg1, arg2) -- args are "ligma" and "balls"
end
Time.timeScale = 6.9 -- causes speed-up
invokeAfterTime(4.20, someFunction, {"ligma", "balls"}) -- executes after 4.20 / 6.9 = 0.6 seconds
```

As shown, the arguments are passed to the function via a Lua table.

## invokeAfterTimeRealtime

`invokeAfterTimeRealtime` is used to schedule a function after a specified amount of _real_ time, regardless of the time scale. You'll probably end up using this less than `invokeAfterTime`, but you do you.

```lua {5}
function someFunction(arg1, arg2)
    print("someFunction called with args: ", arg1, arg2)
end
Time.timeScale = 6.9
invokeAfterTimeRealtime(4.20, someFunction, {"shekma", "donkey"}) -- executes after 4.20 seconds
```

## invokeAfterEndOfFrame

`invokeAfterEndOfFrame` executes the function at the end of the frame. This may be useful for doing stuff after all `update` methods have been called, but before the frame is rendered.

```lua {4}
function someFunction(arg1, arg2)
    print("kevin joke: ", arg1, arg2)
end
invokeAfterEndOfFrame(someFunction, {8008, "s"}) -- executes at end of frame
```

## invokeAfterFixedUpdate

`invokeAfterFixedUpdate` executes the function at the end of the fixed update cycle (which is a physics engine step). This may be useful for doing stuff after all `fixedUpdate` methods have been called, which is when all physics engine stuff is calculated.

```lua {4}
function someFunction(arg1, arg2)
    print("kevin joke: ", arg1, arg2)
end
invokeAfterEndOfFrame(someFunction, {8008, "s"}) -- executes at end of frame
```

And there you have it.

# Collections

A collection is just a group of data, like a list of numbers, or a dictionary of strings. MoonSharp automatically converts some commonly used C# collections into Lua tables, and vice versa.

This can be quite nice, since you can deal with collections entirely in the Lua paradigm, instead of needing to work with C# stuff directly.

For example, in this snippet:

```lua
local illuminatis = getItemsByType("Illuminati") -- illuminatis is a table
local illuminatiSpriteRens = {} -- define a new Lua table here too coz why not
for idx, illuminati in ipairs(illuminatis) do
    illuminatiSpriteRens[idx] = illuminati.GetComponent('SpriteRenderer')
end
```

the `getItemsByType` function has been implemented on the C# side to return a `List<GameObject>`, which is a C# `collection`. And because it gets converted to a `table` in your ModScript, you can use Lua's `ipairs` to loop through it.

However, there can be problems using tables in some cases.

## The Problem

When MoonSharp automatically converts the C# collection to a Lua table (and vice versa), it has to create a _new copy_ of the collection instead of keeping the same reference to the old one. This is usually not a problem, but there are some cases where it is.

In Unity code, there are a lot of methods that take an `Array`, or a `List`, as an argument, then _modify_ that collection _within_ the method. I don't know if this is great practice on Unity's behalf, but it's the reality of which we must live.

So, if you try and pass a Lua table to a Unity method, it gets automatically converted to a C# collection as a new copy, and so the modification happens on that copy of the collection, not the original Lua table.

So after calling that method, the Lua table you passed in will be unchanged, which is probably not what you want. For example, this wouldn't work:

```lua {2,3}
local audioSource = getItemsByType("HeNeedsSomeMilk")[1].GetComponent("AudioSource")
local audioSamples = {} -- here we define a lua table
audioSource.clip.GetData(audioSamples, 0); -- here we pass that table to a Unity method that expects an array
```

It might correctly convert the `audioSamples` table to the C# array and populate that with audio sample data _within_ `GetData`, but the original `audioSamples` table will be unchanged.

## The Solution

To get around this problem, I made a `createCollection` helper function that creates a C# collection internally, then wraps it in MoonSharp's `UserData` type, which prevents it from being automatically converted to a new Lua table, and allows a reference to that same exact collection to be used from within your ModScript,

So `createCollection` returns the `UserData` object it created internally, and now you can keep a direct reference to it from your Lua ModScript, and pass _that_ to the Unity method that modifies the collection.

`createCollection` takes as arguments:

1. The type of the collection, e.g.
   - `"System.Single[]"` for an Array of floats,
   - `` "System.Collections.Generic.List`1[[UnityEngine.ContactPoint2D, UnityEngine]]" `` for a List of type `UnityEngine.ContactPoint2D`
   - `` "System.Collections.Generic.Dictionary`2[[System.String], [Enemy, Assembly-CSharp]]" `` for a Dictionary where the key type is `System.String`, and value type is `Enemy` (which is a YOMG2 type, so we use the `Assembly-CSharp` assembly)
2. A key-value Lua table of options. Right now it's used for **arrays** only, i.e. `{ arrayLength = 666 }`

Here's how you could use it:

```lua {6}
registerType("AudioSource")
registerType("AudioClip")

local audioSource = getItemsByType("HeNeedsSomeMilk")[1].GetComponent("AudioSource") -- needs a "HeNeedsSomeMilk" item in the level
local samplesCount = audioSource.clip.samples * audioSource.clip.channels
local samples = createCollection("System.Single[]", {arrayLength = samplesCount}) -- arrays are a special case from other collections that don't take generic arguments, and have a fixed, known size

audioSource.clip.GetData(samples, 0);

for i = 0, samples.Length - 1 do
    local randomFloat = 0.5 + (math.random() * 0.5) -- rand betweer 0.5 and 1
    samples[i] = samples[i] * randomFloat -- can use square brackets to index C# collections!
end

audioSource.clip.SetData(samples, 0); -- ruins the audio, just an example
```

:::tip
Remember, C# collections used 0-based indexing, and Lua tables are 1-based, so in a C# collection the first element will be at index 0.
:::

:::warning
There is a caveat to using `createCollection`: after you do this once, MoonSharp will no longer automatically convert a collection of that type to a table. Instead it will just return a reference to the C# collection object. And that happens to all ModScript code everywhere if it executes after `createCollection` was called.

<details>
<summary>Why?</summary>

Because `createCollection` needs to (interally) call `registerType` with the provided type, and registering types is global. You could just call `registerType` with the C# collection type yourself if you want more consistent behaviour from the get-go, but that's up to you.

Or you could set the execution order of your scripts with `createCollection` to something really high, so it runs after everything else and doesn't affect them.

It is a bit annoying, but there's not much I can do about it. At least it probably won't a problem too much of the time, I don't know why you'd need to create a collection of GameObjects, which would change the return type of `getItemsByType`

</details>

:::

import DocsImage from "@site/src/components/DocsImage";

# Error Handling

MoonSharp is great when it comes to error messages. It tells you the exact line number, column number, and cause of the error. The error message also includes the title of the ModScript and the MemeItem ID in the error message should make debugging your code a breeze (famous last words)

When an error occurs, it will automatically open the console to show the error message.

## Console

This is the console window:

<DocsImage
  src={require("./img/console with error example.png").default}
  width={1000}
/>

It's used to log output from the `print` or `printTable` functions in your ModScripts, as well as show error messages.

You can resize it, zoom in and out, clear the output, and close it with the button or the `Esc` key.

You can also click on error messages in the console and it will take you to the correct line in the correct ModScript on the correct MemeItem.

And for you reference, at the start of every log there is the exact time it was logged.

## Error messages

When I was younger and first learning to code, for some reason, I was always so afraid of error messages. My brain refused to read them, partly because I thought they require a loads of effort to understand, and partly because I didn't trust that the computer would be able to give me any useful information if I did bother.

Well my friends, that is simply not the case.

Error messages will save you from hours of pain and misery.

And in MoonSharp, the error messages are usually especially clear.

Take this erroneous ModScript on a `Health Area` MemeItem:

```lua
-- hello line 1
local youFrickinMoron = "you just got beaned"

print(lebronjaaaaa a a a  )
```

You will get this error message:

<DocsImage
  src={require("./img/console error message line.png").default}
  width={1000}
/>

<br />

```
Error in "Vegetals Script 001" on "Vegetals-761131-6978": chunk_0:(4,19-20): ')' expected (to close '(' at line 4) near 'a'
```

### Dissecting an error message

Let's dissect this error message.

From right to left, the first useful thing we come across is the ModScript title, which is `"Vegetals Script 001"`, and the MemeItem ID, which is `"Vegetals-761131-6978"`. Already very useful, we _actually_ know what script on what MemeItem to look at to begin our debugging process.

Then there's a `chunk_0`. I have no clue how this works, it's just some MoonSharp thing, but it's not really important.

Then there's the line number, which is `4`, and the column range (character position on that line), which is `19-20`.
This tells your where exactly in your ModScript the error is.

Then there's the actual error, which in this case is that a closing bracket, `')'`, was expected to close the openining bracket, `'('`, but it couldn't find one. And then just for poos and giggles it says what character it's near too, `'a'`. Great.

### Call Stack

Sometimes, an error message will also show a call stack, which shows the path of function calls that was taken to arrive at the error.

Take this script for example:

```lua
function poo()
  print(aoeu.aoeu)
end

function pee()
  poo()
end

function lol()
  pee()
end

lol()
```

This will give an error message like

```
Error in "Memeorang Man Script 001" on "MemeorangMan-683170-f310": chunk_0:(2,7-18): attempt to index a nil value
Call Stack:
poo
pee
lol
```

This just means that the error occured in the `poo` function, which was called by the `pee` function, which was called by the `lol` function. That kind of information can be very useful for debugging.

## Implications

Here are some implications of errors.

- You can't publish your level until it's free of errors.
- Tbh, this whole modding system was a complete last minute afterthough for which I had to go on a month long coding bender in order to implement, so a lot of stuff will probably be broken and not work at first, so please cut me some slack and [report the bug](https://github.com/EthanSK/Ye-Olde-Meme-Game-2-Public/issues/new/choose) with steps to reproduce. Thanks (also it's technically only supported in `experimental` mode).
- It is incredibly important that once you're done, you **test your level in "Play Created Level" mode as the environment differs to the Level Builder, so some things you thought would work will not.** Since there is no console in this mode, you should check the Unity logs file on your computer to see if there are any errors. See the ["Player-related log locations" section of the Unity docs](https://docs.unity3d.com/Manual/LogFiles.html).

# Performance

Lets talk about performance. You must think about the performance of your level on people who will play your levels' devices. You may have the latest RX 7800 XT but little Jameson is playing on his mom's iPhone SE.

So you've got to make sure you are always considering performance on all devices when writing your ModScripts

## Caching

It is very important you cache anything that is computationally expensive to perform.

Caching just means storing the result of a function (or method) call to a variable, and then using that variable instead of calling the function again. Sometimes you can't cache certain things, depending on if you need an updated value, but usually for most things, you can.

Especially the calls for [getting items](/docs/guides/getting-items)

```lua
local snoopDoggs = getItemsByType("SnoopDogg") -- snoopDoggs stores the result of the getItemsByType function call so it doesn't need to scan the level every time.
```

## Cleanup

There is a cleanup function that you can easily place in your ModScript, and it will be called automatically when exiting the level:

```lua
-- ...rest of your code
function cleanup()
  -- unsubscribe from all events here with <some event>.remove()
end
```

All [event handlers](/docs/guides/events) you subscribed to _must_ be unsubscribed to here. If you don't, you will have a memory leak and the game could crash.

## Lifecycle Events

All the [lifecycle events](/docs/guides/lifecycle-events) that get called repetedly could start to impact performance if you're not careful.

If you subscribe to a repeated lifecycle event like `OnTriggerEnterEvent` or `update`, etc, and you do some even slightly performance heavy operation, it could start to cause lag, especially if done across multiple ModScripts.

This issue will become especially problematic in very quickly repeating lifecycle events like `update`, `fixedUpdate`, `lateUpdate`, `OnCollisionStayEvent`, `OnTriggerStayEvent`, and all them ones. Be vary careful, and always keep track of your ModScripts

## Console Logging

If you log a lot to the console and it's open, it will cause lag, but this is only an issue in the Level Builder, so it will only affect you. Still, be careful.

## It's Up To You

At the end of the day, how your level performs on other people's devices is entirely up to you. You are given the freedom to create literal _gold_, or just pure garbage. Up to you.

import Whitelist from "./whitelist.mdx";
import { featureRequestUrl } from "@site/src/constants";

# Safety & Security

At the end of the day mate, I'm just trying to give you as much freedom as humanly possible to do whatever the flying flip you want.

But at the same time, I'm also very concerned over the safey of players of my game.

So I've done my best to balance freedom with security. This has mainly been done through a combination of whitelisting and sandboxing.

## Whitelisting

Whitelisting is a way for me to manually specify what types you can use, based on the following C# things in your ModScripts:

- Namespaces
- Base Types
- YOMG2 Singletons
- Assembly prefixes

<Whitelist />

I think this is a pretty fair balance of freedom, as there's nothng in any of the included types that would allow for network access, operating system access, or input/output.

It essentially allows you access to most Unity code and most YOMG2 code, and some specific, harmless C# `System` libraries.

## Sandboxing

Sandboxing is a way to restrict the environment your ModScript runs in. It is MoonSharp, and currently is set to `Preset_SoftSandbox` in this trimmed down enum:

```csharp {5}
[Flags]
public enum CoreModules
{
    // ...other enum cases
    Preset_SoftSandbox = Preset_HardSandbox | Metatables | ErrorHandling | Coroutine | OS_Time | Dynamic,
    Preset_HardSandbox = GlobalConsts | TableIterators | String | Table | Basic | Math | Bit32,
    Preset_Default = Preset_SoftSandbox | LoadMethods | OS_System | IO,
    Preset_Complete = Preset_Default | Debug,


}
```

If you are advanced enough to know what all the enum case names mean, this should make sence to you. Otherwise, look at the [MoonSharp docs for it](https://www.moonsharp.org/sandbox.html)

## Disagree? Please tell me.

If you can come up with a good reason as to why any of the above allows for a significant security risk to players, please create a <a target="_blank" href={featureRequestUrl}>bug report</a> and I'll do my best to address it.

At the end of the day, I don't care about gameplay quality , I only care about the safety of the player, and making sure they can't be hacked, network access is denied for sending sensitive data to a hacker, and sensitive file information can't be written to or read on the disk. And of course it shouldn't be allowed to manipulate any of the user's OS or software.

import DocsImage from "@site/src/components/DocsImage";

# Common Pitfalls

Here are some common issues you may run in to, or things you may forget to do.

## Not testing in "Play Created Level"

It is of utmost importance that you test your level in "Play Created Level", which is how the end user will be playing your level. The environment is different to the Level Builder, so there could very likely be things you didn't consider that don't work outside the Level Builder. At the end of the day, you are responsible for the quality of your modded level, so don't waste your time building crap.

## Not keeping backups

Keeping backups of your level at regular intervals is very important unless you want to lose all your hard work. You can export a level directly from the Level Builder menu by pressing this button:

<DocsImage
  src={require("./img/exit or publish button.png").default}
  width={100}
/>

### Git repo

You should even set Git repo to backup & keep track of changes to your level files.

Just set up the git repo in the `<...start of Application persistent data path>/ETGgames/Ye Olde Meme Game 2/Levels/UserEditedLevels`. Find out what the Application persistent data path is [here](https://docs.unity3d.com/ScriptReference/Application-persistentDataPath.html)

and only track the desired level `.meme` files with a [.gitignore](https://git-scm.com/docs/gitignore) file that looks something like this:

```
# Ignore everything
*

# But not these files...
!lvl_2a7b3f30-6aec-41d8-9904-7168da55da70.meme
!lvl_5bd69420-c6f9-4c22-a220-e8119dbce6ef.meme
# ...the rest of your files you care about
```

You may have open a few `.meme` files to see which one matches the one you're working on, the level metadata is at the top.

The level file can be found in the

## Not keeping your code structure clean and maintainable

It's very easy to end up writing spaghetti code, and code that's hard to keep track of. While this isn't a coding tutorial, I will say this:

- Name everything nice and clearly so it explains the purpose of itself in the name
- Try and make reusable functions so you avoid repetition, make the code more readable, and only have to change things in one place
- Split your code into multiple ModScripts to keep things organised for youself when coming back to it
- Use comments with `--` to explain what you code is doing, especially if it's not obvious
- idk go watch some yt tuts or smth

## Forgetting to register types

It's very easy to forget to [registerType](/docs/guides/types) before trying to access a member of that type. Make sure you always do this, and try to do so in every ModScript instead of relying on some type that was `registerType`d (globally) in another script.

## Not thinking about performance

It's easy to not think about [performance](/docs/guides/performance) when writing scripts, and it's even easier to accidentally have a terribly perfoming level on other players' devices. Make sure you have considered everything in the performance section thoroughly.

Do you want people to dislike your level and give you a bad ranking on your user profile page?

## Not approaching debugging methodically

Coding can get hard sometimes. Debugging can be a pain, but it can also be fun (yes, I know what you're thinking).

To make it more pleasant experience, you should used the `print` and `printTable` helper functions to log anything you're not sure about to the console. This is how you debug. Get used to it.

## Not asking ChatGPT for help

Despite the mockery of ClosedAI in Campaign, [ChatGPT](https://chat.openai.com/) will probably be your best bet for helping you write your ModScripts. I strongly recommend ChatGPT Plus, it is _significantly_ better than the free one.

Now while Ye Olde Meme Game 2 is still in the early days, ChatGPT probably hasn't been trained on this documentation, or any information about the game. So you should copy and paste the documentation page you're dealing with into ChatGPT, and then give it your code or specific problem.

But also, ChatGPT has been trained very well on Unity and C#, and even MoonSharp, so questions related to that should be answered very well without needing more information.

## Not asking the community for help

The [community](/docs/guides/community) will also be a very useful place to ask for help, mostly on the [Discord](https://discord.com/invite/g5X4MbKx3A) and [Reddit](https://www.reddit.com/r/YeOldeMemeGame2/), but also [Stack Overflow](https://stackoverflow.com/questions/tagged/ye-olde-meme-game-2) might be useful, especially as the game grows in popularity.

## Not reading error messages properly

As a n00b programmmer, it's very tempting to ignore error messages like I once did. This is just plain stupidity. Read the [error messages](/docs/guides/error-handling#error-messages) and spare yourself the pain and misery.

## Forgetting to unsubscribe from handlers

This has already been mentioned a lot, but remember to [unsubscribe from all event handlers](/docs/guides/events#unsubscribing-from-events) you subscribe to, usually in the `cleanup` function, to avoid memory leaks and performance issues.

import DocsImage from "@site/src/components/DocsImage";

# Publishing

Once you've verified your modded level works in "Play Created Level" mode, you'll want to publish it. A level with mods has some slight differences with regards to how it's treated in the yes of the end-user (player) of you level.

## End-User differences

When you publish a level with ModScripts, it will show up in "Browse Published Levels" with a blue ModScript icon over the experimental mode enabled icon.

<DocsImage
  src={require("./img/level preview with mod.png").default}
  width={350}
/>

<br />

Then, just before a player plays or copies the level to edit, they will see this
warning message:

<DocsImage src={require("./img/mods warning modal.png").default} width={800} />

## Browse Published Level

There is a option to filter out levels with mods in them in the "Browse Published Levels" page. This is off by default. Think about that.

## Win verification

When a player wins a normal un-modded level, the server usually performs verification checks to make sure the player didn't cheat. These checks are turned off for modded levels.

# Congratulations.

You are now a modding pro.  
You have uploaded your amazing modded level to the world, and you will impact the lives of millions of people.

Your ModScripts have automatically been uploaded to the Community Mods panel for other budding YOMG2 developers to be inspired and empowered by.

Speaking of community, let me tell you a bit about it...

import DocsImage from "@site/src/components/DocsImage";
import { publicTrackerUrl } from "@site/src/constants";

# Community

If you haven't already guessed it, this game is very community driven. It relies on you guys to be creative and build something sick, for both level and mods for levels.

So here's a rundown of how you can interact with the community and me for anything about the game

## Community Mods

Add ModScripts from all published levels get uploaded to the Community Mods panel:

<DocsImage
  src={require("./img/community mods panel.png").default}
  width={1300}
/>

You can sort by popularity or date, filter by meme type, published level id, script title, and even bring out a secret panel from the top left to filter by script hash.

Script hash uniquely identifies a script. It prevents multiple of the exact same ModScript from being put in the Community Mods.

Because your code gets automatically shared to Community Mods, you should think about keeping your code clean understandable for other developers.

## Discord

Discord is probably of the best ways to interact with the community. here is the invite link: [https://discord.com/invite/HmkcGRMZGc](https://discord.com/invite/HmkcGRMZGc)

This is chill place to vibelax and talk Ye Olde Meme Game 2. There are lots of appropriate channels to discuss things, including one for modding.

## Reddit

Reddit is where you can publicly find and create community YOMG2 related posts relating to the game and ModScripts.

Use at as you would any other subreddit.

Here is the link: [https://www.reddit.com/r/YeOldeMemeGame2/](https://www.reddit.com/r/YeOldeMemeGame2/)

## GitHub

To report bugs and submit feature requests, and see and interact with all those created by the community, use the public GitHub repo: <a target="_blank" href={publicTrackerUrl}>{publicTrackerUrl}</a>

## Stack Overflow

Now if you prefer an old-fashioned approach to developing, you can use Stack Overflow to ask questions about the game, using the `ye-olde-meme-game-2` [tag](https://stackoverflow.com/questions/tagged/ye-olde-meme-game-2)

## REEEthan

I have a YouTube channel where I livestream and make videos showing the development of Ye Olde meme Game 2.

If you wanna talk to me about meme game, drop by in one of my livestreams and say hi!

Or just comment on one of my videos, i'll do my best to respond.

The channel is called REEEthan, here is the link: [https://www.youtube.com/channel/UCQ6ZI3Hh5gY4Qxw5Zk0zgWQ](https://www.youtube.com/channel/UCQ6ZI3Hh5gY4Qxw5Zk0zgWQ)

