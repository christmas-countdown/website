<script>
	import Document from '../../components/Document.svelte';
	import Question from '../../components/Admonitions/Question.svelte';
	import Accordion from '../../components/Accordion/Accordion.svelte';
	import AccordionItem from '../../components/Accordion/AccordionItem.svelte';
	import { getContext } from 'svelte';

	let pages = getContext('pages');
</script>

<svelte:head>

<title>Commands • Christmas Countdown</title>
<meta name="title" content="Commands • Christmas Countdown" />
<meta name="og:title" content="Commands • Christmas Countdown" />
<meta name="twitter:title" content="Commands • Christmas Countdown" />
<meta name="description" content="View the Christmas Countdown Discord bot's commands." />
<meta name="og:description" content="View the Christmas Countdown Discord bot's commands." />
<meta name="twitter:description" content="View the Christmas Countdown Discord bot's commands." />
</svelte:head>

<Document active="/discord/commands" {pages}>

# Commands

<Question title="Help">
Need help? [Join the Discord support server](https://go.eartharoid.me/discord).
</Question>

The available commands are shown in this screenshot of the `help` command.

![`help` command output](https://static.eartharoid.me/sharex/21/10/bot-help-cmd.png)

Click on the commands below to find out more about each one.

<Accordion prefix="">

## Christmas

<AccordionItem name="/days" description="Get the number of days left until Christmas in your timezone">
No options.
</AccordionItem>

<AccordionItem name="/hours" description="Get the number of hours left until Christmas in your timezone">
No options.
</AccordionItem>

<AccordionItem name="/joke" description="Get a random one of over 100 Christmas jokes">
No options.

Jokes are currently English-only.
</AccordionItem>

<AccordionItem name="/minutes" description="Get the number of minutes left until Christmas in your timezone">
No options.
</AccordionItem>

<AccordionItem name="/months" description="Get the number of months left until Christmas in your timezone">
No options.
</AccordionItem>

<AccordionItem name="/radio" description="Get the link to add the Christmas Radio bot to your server">
No options.
</AccordionItem>

<AccordionItem name="/seconds" description="Get the number of seconds left until Christmas in your timezone">
No options.
</AccordionItem>

<AccordionItem name="/total" description="Get the total time left until Christmas in your timezone">
No options.
</AccordionItem>

<AccordionItem name="/weekday" description="Get the day of the week that Christmas Day is on">
No options.
</AccordionItem>

<AccordionItem name="/weeks" description="Get the number of weeks left until Christmas in your timezone">
No options.
</AccordionItem>

## General

<AccordionItem name="/donate" description="Donate to unlock additional features">
No options.
</AccordionItem>

<AccordionItem name="/help" description="List the available commands">
No options.
</AccordionItem>

<AccordionItem name="/info" description="Get information and statistics about the bot (link the stats dashboard)">
No options.
</AccordionItem>

<AccordionItem name="/invite" description="Add the bot to your own Discord server">
No options.
</AccordionItem>

<AccordionItem name="/ping" description="Get connection information">
No options.
</AccordionItem>

<AccordionItem name="/secret-santa blacklist" description="Manage the naughty list">

**Required permissions:** `MANAGE_GUILD`

|Name|Type|Required?|Example|Description|
|-|-|-|-|-|
|`add`|String|Yes|`@GoodElf`|The member to add to the naughty list|
|`remove`|String|Yes|`@BadElf`|The member to remove from the naughty list|

</AccordionItem>

<AccordionItem name="/secret-santa list" description="Check who each participant is assigned to">

**Required permissions:** `MANAGE_GUILD`

No options.

</AccordionItem>

<AccordionItem name="/secret-santa show" description="See who you need to give a gift to">
No options.
</AccordionItem>

<AccordionItem name="/suggest" description="Submit a suggestion">

#### Options

|Name|Type|Required?|Example|Description|
|-|-|-|-|-|
|`suggestion`|String|Yes|`Add a command that ...`|Your suggestion|

</AccordionItem>

## Settings

<AccordionItem name="/countdown" description="Create the countdown webhook">

**Required permissions:** `MANAGE_GUILD`

#### Options

|Name|Type|Required?|Example|Description|
|-|-|-|-|-|
|`channel`|Channel|No|`#countdown`|The channel to create the webhook in - defaults to current channel|

</AccordionItem>

<AccordionItem name="/server set" description="Update your server's settings (timezone, locale etc)">

**Required permissions:** `MANAGE_GUILD`

#### Options

|Name|Type|Required?|Example|Description|
|-|-|-|-|-|
|`auto_toggle`|Boolean|No|`False`|**Premium only** - Automatically toggle the countdown on/off at the start and end of December?|
|`enabled`|Boolean|No|`True`|Enable the countdown? (Use [`/toggle`](#toggle) shortcut)|
|`locale`|String|No|`es-ES`|The locale (language) for the server|
|`mention`|Role|No|`@Christmas`|**Premium only** - The role to mention with the countdown message every morning|
|`timezone`|String|No|`EST`|The [timezone](./timezones) for the server|

</AccordionItem>

<AccordionItem name="/server reset" description="Reset your server's settings (timezone, locale etc)">

**Required permissions:** `MANAGE_GUILD`

No options.
</AccordionItem>

<AccordionItem name="/server view" description="View your server's settings (timezone, locale etc)">

**Required permissions:** `MANAGE_GUILD`

No options.
</AccordionItem>

<AccordionItem name="/toggle" description="Toggle the countdown on/off (same as `enabled` server setting)">

**Required permissions:** `MANAGE_GUILD`

No options.
</AccordionItem>

<AccordionItem name="/user set" description="View your personal settings (timezone, locale etc)">

#### Options

|Name|Type|Required?|Example|Description|
|-|-|-|-|-|
|`locale`|String|No|`es-ES`|Your locale (language)|
|`timezone`|String|No|`EST`|Your [timezone](./timezones)|

</AccordionItem>

<AccordionItem name="/user reset" description="Reset your personal settings (timezone, locale etc)">
No options.
</AccordionItem>

<AccordionItem name="/user view" description="View your personal settings (timezone, locale etc)">
No options.
</AccordionItem>

</Accordion>

</Document>
