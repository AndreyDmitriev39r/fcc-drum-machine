## Build a Markdown Previewer

Objective - to build an app similar to this:

[Example on codepen](https://codepen.io/freeCodeCamp/full/MJyNMd)

## Requirements

### Technologies: possible options

**vanilla**


* HTML

* JavaScript

* CSS

**CSS preprocessors**

* Bootstrap

* SASS

**JS frameworks**

* React

* Redux

* jQuery

### User stories

* #1: I should be able to see an outer container with a corresponding `id="drum-machine"` that contains all other elements.

* #2: Within #drum-machine I can see an element with a corresponding `id="display"`.

* #3: Within `#drum-machine` I can see **9** clickable drum pad elements, each with a class name of *drum-pad*, a *unique id* that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: `Q, W, E, A, S, D, Z, X, C`. The drum pads MUST be in this order.

* #4: Within each `.drum-pad`, there should be an HTML5 *audio* element which has a `src` attribute pointing to an audio clip, a class name of `clip`, and an *id* corresponding to the inner text of its parent `.drum-pad` (e.g. `id="Q", id="W", id="E"` etc.)

* #5: When I click on a `.drum-pad` element, the audio clip contained in its child *audio* element should be triggered.

* #6: When I press the trigger key associated with each `.drum-pad`, the audio clip contained in its child `audio` element should be triggered (e.g. pressing the *Q* key should trigger the drum pad which contains the string *Q*, pressing the *W* key should trigger the drum pad which contains the string *W*, etc.).

* #7: When a `.drum-pad` is triggered, a string describing the associated audio clip is displayed as the inner text of the `#display` element (each string must be unique).

### Possible audio samples

* [Heater 1](https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3)
* [Heater 2](https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3)
* [Heater 3](https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3)
* [Heater 4](https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3)
* [Clap](https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3)
* [Open-HH](https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3)
* [Kick-n'-Hat](https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3)
* [Kick](https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3)
* [Closed-HH](https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3)

### Testing

*codepen template*

https://codepen.io/pen?template=MJjpwO

*CDN link to run tests in other environment*

https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js