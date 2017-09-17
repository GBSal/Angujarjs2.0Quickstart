
import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";


@Component({
selector:'pm-star',
templateUrl : './star.component.html',
styleUrls:['./star.component.css']

})
export class StarComponent
{
    
    @Input()  rating:number;
    starWidth:number;
    @Output() ratingClicked:EventEmitter<string> = 
                        new EventEmitter<string>();
    
    ngOnChanges():void{
        this.starWidth= this.rating * 86/5; 
  } 

    onClicked():void{
        this.ratingClicked.emit(`The rating ${this.rating} is clicked`);    
    }

    
}

