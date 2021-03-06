import { Component, Input, ViewChild, ElementRef, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "cap-menuItem",
  templateUrl: "./cap-menuItem.component.html",
  styleUrls: ["./cap-menuItem.component.css"]
})
export class CapMenuItemComponent {
  @Input("id")
  id: string;
  @Input("value")
  value: any;
  @Input("link")
  link: string;
  @Input("styleClass")
  styleClass: string;
  @Input("principal")
  principal: boolean;
  @ViewChild("items")
  items: ElementRef;
  @ViewChild("menuItem")
  menuItem: ElementRef;

  @Input("itemSelecionado")
  itemSelecionado

  @Output()
  selecionar = new EventEmitter();

  exibir = false;
  icone;
  mod = "";
  status = "";
  subClass = "";
  exibido = false;

  constructor() {}

  public getIconUrl(icone) {
    return icone ? icone.replace(/#/g, "%23") : null;
  }

  toggleClass(hasChild) {
    if (hasChild) {
      this.exibir = !this.exibir;
    }
  }
 

  select(item)
   { 
    this.subClass = "ativado"
    this.selecionar.emit(item.codigo);
     
  }
   
}
