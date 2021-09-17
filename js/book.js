// selector
let c = document.querySelector("#li");

let m1 = document.querySelector('#author');
let m = document.querySelector('#title');

let m2 = document.querySelector('#isbn');
let my_list = document.querySelector('#my_list');






// event listener
c.addEventListener("submit", cu);
my_list.addEventListener("click", rmv);

// initilize info class
class x1 {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
}

// add to dom class
class doma {



    static domi(ob) {


        // add element
        let c1 = document.createElement('tr');
        c1.innerHTML = `
        <td>${ob.a} </td>
        <td>${ob.b} </td>
        <td>${ob.c} </td>
        <td> <a href="#" class="delete">X</a>
        </td>`;

        my_list.appendChild(c1);
        




    }
    // clean elemet
    static clean() {
        m.value = " ";
        m1.value = " ";
        m2.value = " ";
    }
    //  check empty filed
    static error(r1, r2) {

        let div = document.createElement("div");
        div.className = `alert ${r2}`;

        div.appendChild(document.createTextNode(r1));
        let con = document.querySelector(".container");
        let w = document.querySelector("#li");
        con.insertBefore(div, w);
        setTimeout(() => {

            div.remove();



        }, 3000)



    }

    // added+delet alert function
    static added(o, p) {
        let div = document.createElement("div");
        div.className = `alert ${p}`;

        div.appendChild(document.createTextNode(o));
        let con = document.querySelector(".container");
        let w = document.querySelector("#li");
        con.insertBefore(div, w);
        setTimeout(() => {

            div.remove();



        }, 3000)
        // let 🐅 = "mihan"

   
    }

    //   remove single element
    static rmv_elemrnt(q) {

        if (q.firstChild.textContent == "X") {
            // console.log(q.parentElement.previousElementSibling)
            // console.log(q.parentElement.parentElement:nth-child(3)
            q.parentElement.parentElement.remove();
            store.rem(q.parentElement.previousElementSibling.textContent);
            //    localStorage.clear()


        }


    }



}



class store {

    static funu() {
        let f = []
        if (localStorage.getItem("token") === null) {
            f = []
        } else {
            f = JSON.parse(localStorage.getItem("token"));
        }
        return f
    }


    static fuck(book) {
        let b = store.funu();
        b.push(book);
        localStorage.setItem("token", JSON.stringify(b));
    }
    static show() {
        let b = store.funu();

        b.forEach(data => {
            doma.domi(data)


        });

    }
    static rem(c) {
        let m = c.trim();
        // console.log(c)
        let z = store.funu();
        z.forEach((d, i) => {
            if (d.c == m) {
                z.splice(i, 1);
            }

        });
        localStorage.setItem("token", JSON.stringify(z))
    }


}
// event listener for dom load
document.addEventListener("DOMContentLoaded", store.show())

// add function
function cu(e) {
    //    let ob1 = new doma();

    if (m.value == " " || m1.value == " " || m2.value == " ") {
        //  alert("lol")
        doma.error("please fill up all your field", "er");

    } else {
        let ob = new x1(m.value, m1.value, m2.value);

        doma.domi(ob);
        doma.clean();
        doma.added("books  added", "suc");
        store.fuck(ob);
        // doma.addtostore(m.value, m1.value, m2.value);


    }



    e.preventDefault();


}
// add function

function rmv(e) {
    doma.added("bookes item removed", "suc");
    doma.rmv_elemrnt(e.target);


    e.preventDefault();
}