# NgxFlypanel

![ngx-flypanel](https://user-images.githubusercontent.com/12455634/76822913-7d6d6500-6838-11ea-9a11-2f965eca9dd6.gif)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/cvvkshcv/)

### Installation
`npm i ngx-flypanel --save`

#### Then add NgxFlypanelModule into imports of your module
##### ex: app.module.ts

```
import { NgxFlypanelModule } from  'ngx-flypanel';
  
imports: [
	BrowserModule,
	NgxFlypanelModule <----
],
```

### For issues
> Raise issues [here](https://github.com/cvvkshcv/ngx-flypanel/issues).

## Usage 
```
<ngx-flypanel [width]="620" [open]="panels.right" [placement]="'right'" [scrollToTop]="true"
                [backdrop]="true" [position]="'fixed'" (whenClose)="panels.right = false">
    <div flypanel-header>
      <p>
        Heading <i>With custom html tag</i>
      </p>
    </div>
    <div flypanel-content>
      <h1>Right side panel</h1>
      <h1>Right side panel</h1>
      <h1>Right side panel</h1>
      <h1>Right side panel</h1>
    </div>
  </ngx-flypanel>
  <button (click)="panels.right = !panels.right">Toggle</button>
 ```
 
 ```
<ngx-flypanel [width]="320" [open]="boolVal" [placement]="'right'" [position]="'relative'" (whenClose)="boolVal = false">
    <div flypanel-header>
      <h1>Hello flypanel heading</h1>
    </div>
    <div flypanel-content>
      <my-component></my-component>
    </div>
  </ngx-flypanel>
  <button (click)="boolVal = !boolVal">Toggle</button>
 ```
### Input properties
```
@Input() id: string;
@Input() open = false; // open or close flypanel
@Input() headerStyle = {}; // style for #header tag
@Input() placement: 'left' | 'rigth' | 'bottom' = 'rigth'; // placement of panel
@Input() height = 300; // height applicable when placement is 'bottom'
@Input() width = 250; // width applicable when its 'right' or 'left' placement
@Input() position: 'fixed' | 'relative' = 'fixed'; // position fixed on based on parent
@Input() top = 0; // top for placement of flypanel
@Input() backdrop: boolean; // transparent background like bootstrap model
@Input() backdropTop = 0; // top value for backdrop
@Input() scrollToTop = false;
@Input() maxHeight;
```
### Output properties
```
@Output() whenOpen = new EventEmitter<any>();
@Output() whenClose = new EventEmitter<any>();
@Output() whenResize = new EventEmitter<any>();
@Output() whenScrollToTop = new EventEmitter<any>();
```
# Features!

  - Resizable height, when the placement is in bottom
  - Backdrop option is available
  - Easy to manage the styles of your component because ngx-flypanel  is just a wrapper around your content
  - Flypanel can be overlay or push other content based on position 'fixed' or 'relative' property
  - id property used to track multiple flypanel in same page
  - headerStyle is an object which helps to overried header style
