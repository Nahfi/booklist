// form select
let c = document.querySelector("#li");
//input select
let m1 = document.querySelector('#author');
let m = document.querySelector('#title');

let m2 = document.querySelector('#isbn');
//table select
let my_list = document.querySelector('#my_list');

my_list.addEventListener("click", rem)

c.addEventListener('submit', addtodom);


// value initilization class
class value {


    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }


}


class addtodoc {


    //    error text genrator
    static err(x, y) {

        // console.log("um inside err fun")
        let c = document.createElement("div");
        c.className = `alert ${y}`;
        c.appendChild(document.createTextNode(x));
        let con = document.querySelector('.container');
        let c1 = document.querySelector("#li");
        con.insertBefore(c, c1);
        setTimeout(() => {

            c.remove();

        }, 3000)


        // d=document.createElement('h3');
    }

    // addto dom function
    static adi(ob1) {

        let tr = document.createElement("tr");


        tr.innerHTML = `<td> ${ob1.a} </td> 
  <td> ${ob1.b} </td> <td> ${ob1.c} </td>
  <td> <a href="#">X</a> </td>    `;
        // my_list.innerHTML = tr;
        my_list.appendChild(tr);






    }
    // remove from dom
    static remove(re) {
     
        let del = (re.target);
        console.log(del)
        if (del.hasAttribute("href")) {
            del.parentElement.parentElement.remove();
            addtodoc.err("Remove succesfull", 'er');
            let ci = del.parentElement.previousElementSibling;
            // console.log(ci.textContent)
            local.tm(ci.textContent);

        }

        //    console.log(del)

    }
    // remove data from inputfield
    static clean() {
        m.value = " ";
        m1.value = " ";
        m2.value = " ";
    }

}




// class for insert into local storage
class local {

    static tm(s) {
        let val = local.find();
         console.log(s)
        val.forEach((x, y) => {
         
            if (parseInt(x.c) == parseInt(s)) {
               
                val.splice(y,1);
            }
        //  console.log(`${x.c} and ${y}`)

        })
        localStorage.setItem("token", JSON.stringify(val));
    }

    static find() {
        let x = [];
        if (localStorage.getItem("token") === null) {
            x = []

        } else {
            x = JSON.parse(localStorage.getItem("token"));
        }
        return x


    }
    static addl(ob) {

        let val = local.find();
        val.push(ob);
        //  console.log(val);

        localStorage.setItem("token", JSON.stringify(val));

    }
    static domlo() {
        let val = local.find();
        // console.log(val)
        //addtodoc.adi(val);
        val.forEach(x => {

            // console.log(x);
            addtodoc.adi(x)

        });

    }

}
// document.querySelector('#cls')

document.getElementById("cls")
document.addEventListener('DOMcontentLoaded', local.domlo())





//add to dom function
function addtodom(e) {
    // console.log("buttion is clicked")

    //check error
    if (m.value == "" || m1.value == "" || m2.value == "") {
        // console.log("buttion is clicked")

        addtodoc.err("some filde are mssing", 'er')
    } else {
        let val = new value(m.value, m1.value, m2.value);
        addtodoc.clean();
        addtodoc.adi(val);
        addtodoc.err("insert succesfull", 'suc');
        local.addl(val);



    }





    e.preventDefault()
}

// remove functiondwe
function rem(e) {


    addtodoc.remove(e)


    e.preventDefault()


}