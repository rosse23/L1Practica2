import {Products, ProductsManagement} from "./products.js";
class Ui {
    constructor() {
        this.uiName = document.getElementById("name");
        this.uiDescription = document.getElementById("description");
        this.uiQuantity = document.getElementById("quantity");
        //this.uiForm = document.getElementById("form-data");
        this.uiNewName = document.getElementById("newname");
        this.uiNewDescription = document.getElementById("newdescription");
        this.uiNewQuantity = document.getElementById("newquantity");
        this.uiAdd = document.getElementById("btn");
        this.uiRemov = document.getElementById("btn1");
        this.uiUpdate = document.getElementById("update");
        this.container = document.getElementById("container-table");
        this.manager =  new ProductsManagement();
        let p1 = new Products("Pollo", "Pollo Sofia", 20);
        let p2 = new Products("Galletas", "Galleras Mabel", 50);
        let p3 = new Products("Pollo", "Pollo Imba", 50);
        this.manager.addProducts(p1);
        this.manager.addProducts(p2);
        this.manager.addProducts(p3);
        this.loadEvents();
    }
    loadEvents() {
        this.uiAdd.addEventListener("click", (e) => {
            e.preventDefault();
            this.addProducts(
                this.uiName.value,
                this.uiDescription.value,
                this.uiQuantity.value);
            this.clearForm();
        });
        this.uiRemov.addEventListener("click", (e) => {
            e.preventDefault();         
            this.removeProducts(
                this.uiName.value,
                this.uiDescription.value,
                this.uiQuantity.value);
            this.clearForm();
        });
        this.uiUpdate.addEventListener("click", (e) => {
            e.preventDefault();         
            this.updateProducts(
                this.uiName.value,
                this.uiDescription.value,
                this.uiQuantity.value,
                this.uiNewName.value,
                this.uiNewDescription.value,
                this.uiNewQuantity.value);
            this.clearForm();
        });
       
    }
    clearForm() {
                this.uiName.value = "";
                this.uiDescription.value = "";
                this.uiQuantity.value = "";
    }
    loadTable() {
        var html = "";
        for (var i = 0; i < this.manager.showProducts().length; i++) {
            html += `
            <tr>
                <td scope="row">
                ${this.manager.showProducts()[i].name}</td>
                <td>${this.manager.showProducts()[i].description}</td>
                <td>${this.manager.showProducts()[i].quantity}</td>
            </tr>`;
        }
        this.container.innerHTML = html;
    }
    addProducts(name, description, quantity) {
        let p1 = new Products(name, description, quantity);
        this.manager.addProducts(p1);
        this.loadTable();
    }
    removeProducts(name, description, quantity) {
        let p1 = new Products(name, description, quantity);
        this.manager.removeProducts(p1);
        this.loadTable();
    }
    updateProducts(name, description, quantity,newname,newdescription, newquantity) {
        let p1 = new Products(name, description, quantity);
        let p2 = new Products(newname,newdescription,newquantity)
        this.manager.updateProducts(p1,p2);
        this.loadTable();
    }
}
let ui = new Ui();
ui.loadTable();
