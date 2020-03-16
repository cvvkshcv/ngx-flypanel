import { Component, OnInit, Input, Output, EventEmitter, ViewChild, HostListener, ElementRef, OnChanges } from '@angular/core';

@Component({
  selector: 'ngx-flypanel',
  templateUrl: './ngx-flypanel.component.html',
  styleUrls: ['./ngx-flypanel.component.scss']
})
export class NgxFlypanelComponent implements OnInit, OnChanges {

  className = 'fp-close';
  windowStartingDimensionInfo;
  mouseDown: boolean;
  screenY: any;

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
  @Output() whenOpen = new EventEmitter<any>();
  @Output() whenClose = new EventEmitter<any>();
  @Output() whenResize = new EventEmitter<any>();
  @Output() whenScrollToTop = new EventEmitter<any>();

  @ViewChild('flypanel', { static: true }) flypanel: ElementRef;

  @HostListener('document:keydown.escape')
  onKeydownHandler() {
    this.closePanel();
  }

  constructor() {
    this.handleResize = this.handleResize.bind(this);
    this.removeTempListeners = this.removeTempListeners.bind(this);
  }

  ngOnInit() {}

  ngOnChanges(): void {
    if (this.open) {
      this.className = 'fp-open';
      this.whenOpen.next(this.id);
    } else {
      this.className = 'fp-close';
      this.whenClose.next(this.id);
    }
    if (this.scrollToTop) {
      this.handleScrollToTop();
    }
  }

  handleScrollToTop() {
    const scroller = this.flypanel.nativeElement.querySelector('.content.custom-scroll');
    if (scroller) {
      scroller.scrollTop = 0;
      this.whenScrollToTop.next(this.id);
    }
  }

  closePanel() {
    this.open = false;
    this.className = 'fp-close';
    this.whenClose.next(this.id);
  }

  startResize(event) {
    if (this.placement !== 'bottom') { return false; }
    this.flypanel.nativeElement.classList.add('no-animation'); // Added to remove height animation while resizing
    event.preventDefault();
    this.mouseDown = true;
    this.windowStartingDimensionInfo = this.flypanel.nativeElement.getBoundingClientRect();
    this.screenY = event.screenY;
    document.addEventListener('mousemove', this.handleResize);
    document.addEventListener('mouseup', this.removeTempListeners);
  }

  handleResize(event) {
    if (this.mouseDown) {
      const screenY = event.screenY;
      if (screenY > 200 && screenY < window.innerHeight) {
        this.flypanel.nativeElement.style.height = (this.windowStartingDimensionInfo.height + this.screenY - screenY) + 'px';
      }
    }
  }

  removeTempListeners() {
    this.whenResize.emit({
      panelHeight : this.flypanel.nativeElement.clientHeight
    });
    this.mouseDown = false;
    this.flypanel.nativeElement.classList.remove('no-animation'); // Removing no animation
    document.removeEventListener('mousemove', this.handleResize);
    document.removeEventListener('mouseup', this.removeTempListeners);
  }

}
