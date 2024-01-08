<script>
	import Warning from '$components/Admonitions/Warning.svelte';
	import Accordion from '$components/Accordion/Accordion.svelte';
	import AccordionItem from '$components/Accordion/AccordionItem.svelte';
	import { open } from '$components/Accordion/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		console.log($open)
		open.set(document.location.hash.slice(1) ?? null);
		console.log($open)
	});
</script>

<svelte:head>
<title>API • Christmas Countdown</title>
<meta name="title" content="API • Christmas Countdown" />
<meta name="og:title" content="API • Christmas Countdown" />
<meta name="twitter:title" content="API • Christmas Countdown" />
<meta name="description" content="Use the Christmas Countdown REST API to get the time left to Christmas and Christmas jokes." />
<meta name="og:description" content="Use the Christmas Countdown REST API to get the time left to Christmas and Christmas jokes." />
<meta name="twitter:description" content="Use the Christmas Countdown REST API to get the time left to Christmas and Christmas jokes." />
</svelte:head>

<div class="max-w-2xl mx-auto">

<div class="m-4 sm:m-8 prose sm:prose-lg">

# API

Please read the [terms of service](/terms) before using the API. 

<!-- ## Specification

| Release date  | Version name | Documentation                                                                          |
| ------------- | ------------ | -------------------------------------------------------------------------------------- |
| November 2021 | `pine`       | [SwaggerHub](https://app.swaggerhub.com/apis-docs/eartharoid/christmas-countdown/pine) |
--> 


## Endpoints

Click on the cards to view more information about each endpoint.

<Accordion prefix="/api">

<AccordionItem name="/is-today" description="Check if today is Christmas Day">

#### Query parameters

| Name                    | Required? | Default |
| ----------------------- | --------- | ------- |
| [`timezone`](#timezone) | No        | `UTC`   |

#### Response

Returns a JSON boolean, `true` or `false`.
##### Example

```json
true
```

</AccordionItem>

<AccordionItem name="/is-tomorrow" description="Check if today is Christmas Eve">

#### Query parameters

| Name                    | Required? | Default |
| ----------------------- | --------- | ------- |
| [`timezone`](#timezone) | No        | `UTC`   |

#### Response

Returns a JSON boolean, `true` or `false`.
##### Example

```json
true
```

</AccordionItem>


<AccordionItem name="/joke" description="Get a Christmas joke">

#### Query parameters

| Name                    | Required? | Default |
| ----------------------- | --------- | ------- |
| [`language`](#language) | No        | `en`    |

#### Response

Returns a JSON object with a `question` and `answer` property

##### Example

```json
{
	"question": "What do you call a snowman with a six pack?",
	"answer": "An abdominal snowman!"
}
```

</AccordionItem>

<AccordionItem name="/percentage" description="Get the current countdown complete percentage">

#### Query parameters

| Name                    | Required? | Default |
| ----------------------- | --------- | ------- |
| [`timezone`](#timezone) | No        | `UTC`   |

#### Response

Returns a JSON number.
##### Example

```json
86.55251292873983
```

</AccordionItem>

<AccordionItem name="/timeleft/" description="Get the time left until Christmas in all units">

This returns the same numbers as [`/timeleft/:period`](#/timeleft/:period), but all periods in a single request.

#### Query parameters

| Name                    | Required? | Default |
| ----------------------- | --------- | ------- |
| [`timezone`](#timezone) | No        | `UTC`   |

#### Response

Returns a JSON object.
##### Example

```json
{
	"months": 1.6100726825288403,
	"weeks": 7.015316686507936,
	"sleeps": 50,
	"days": 49.10721679398148,
	"hours": 1178.5732030555555,
	"minutes": 70714.39218333333,
	"seconds": 4242863.531
}
```

</AccordionItem>

<AccordionItem name="/timeleft/:period" description="Get the time left until Christmas in a given unit">

#### Path parameters

##### `period`

Can be one of:

- `months`
- `weeks`
- `sleeps`
- `days`
- `hours`
- `minutes`
- `seconds`


#### Query parameters

| Name                    | Required? | Default |
| ----------------------- | --------- | ------- |
| [`timezone`](#timezone) | No        | `UTC`   |

#### Response

Returns a JSON number.
##### Example

```json
49.11484347222222
```

</AccordionItem>

<AccordionItem name="/timeleft/total" description="Get the total time left until Christmas">

<Warning>

This route gives the current live countdown.
**Please DO NOT make requests every second.**
Either only make requests upon user interaction, or only refresh every hour.
If you want a live countdown, embed the [fullscreen](/fullscreen) countdown page with an iframe,
or use [christmas.js](https://github.com/christmas-countdown/christmas.js) to make your own.

</Warning>


#### Query parameters

| Name                    | Required? | Default |
| ----------------------- | --------- | ------- |
| [`timezone`](#timezone) | No        | `UTC`   |

#### Response

Returns a JSON object.
##### Example

```json
{
	"days": 49,
	"hours": 2,
	"minutes": 44,
	"seconds": 33
}
```

</AccordionItem>

<AccordionItem name="/weekday" description="Get the day of the week that Christmas Day is on">

#### Query parameters

| Name                    | Required? | Default |
| ----------------------- | --------- | ------- |
| [`timezone`](#timezone) | No        | `UTC`   |

#### Response

Returns a JSON string.
##### Example

```json
"Monday"
```

</AccordionItem>

</Accordion>

## Query parameters

### `language`

You may optionally specify the joke language with `?language=`.
The language defaults to `en`, and can be one of:

- `en`

### `timezone`

You may optionally specify the timezone with `?timezone=`.
The timezone defaults to `UTC` and can be any valid
[IANA timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) name.
If not an exact match, the API will attempt to find a valid timezone given the input.
For example, `London` and `GMT` will resolve to  `Europe/London`.
If a valid timezone can't be resolved the API will respond with a HTTP 400 status code.

</div>

</div>