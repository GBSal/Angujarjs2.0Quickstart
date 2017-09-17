import { Component, OnInit } from "@angular/core"
import {IProduct} from "./product";
import { ProductService } from "./product.service";

@Component({
    templateUrl:"./product-list.component.html",
    styleUrls:["./product-list.component.css"]
})
export class ProductListComponent
                        implements OnInit
{
    filteredProduct :IProduct[] ;
    products:IProduct[];

    toggleImage ():void {
        this.showImage = !this.showImage;
    } 

    ngOnInit():void {
        this._productService.getProducts()
                    .subscribe(x=>{
                        this.products = x;
                        this.filteredProduct = this.products;
                    }
                    ,err => { 
                        console.log(err.message);
                    });
        
    }

    private callback(data ):void{

        
    }

    onRatingClicked(message:string):void {
        this.pageTitle = "Product List : " + message;
    }
    PerformFilter(filterBy: string ): 
    IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product:IProduct)=>
            product.productName.toLocaleLowerCase().indexOf(filterBy)!==-1);
    }

    constructor(private _productService:ProductService){
    
    }
    pageTitle: string = "Product List";
    imageWidth:number =30;
    imageMargin:number = 2;
    showImage:boolean = true;

    _listFilter:string;
    get listFilter():string{return this._listFilter;}
    set listFilter(value:string){
        this._listFilter = value;
        this.filteredProduct = this.listFilter ? this.PerformFilter(this._listFilter):this.products;
     }
     
     
}