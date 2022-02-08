const productdict ={
    38744:['Moon Shine','images/bagsimage/bag1/',1000,'Be Bold','images/backgrounds/productbg2.svg',
    [3,'Polyester','Blue','1 Bag','Durable Material','18 inch','35 L','No','Yes','No','Zipper','1 Pockets','1','10 inch','20 inch','6 inch','Laptop Bags','India']],
    38745:['Mighty Blue','images/bagsimage/bag2/',1234,'In Style','images/backgrounds/productbg3.svg',
    [3,'Polyester','Blue','1 Bag','Durable Material','18 inch','35 L','No','Yes','No','Zipper','1 Pockets','1','10 inch','20 inch','6 inch','Laptop Bags','India']],
    74376:['Blue Shine','images/bagsimage/bag3/',1449,'Classic','images/backgrounds/productbg4.svg',
    [3,'Polyester','Blue','1 Bag','Durable Material','18 inch','35 L','No','Yes','No','Zipper','1 Pockets','1','10 inch','20 inch','6 inch','Laptop Bags','India']],
    79283:['Classic Grey','images/bagsimage/bag4/',599,'Rock Star','images/backgrounds/productbg5.svg',
    [3,'Polyester','Blue','1 Bag','Durable Material','18 inch','35 L','No','Yes','No','Zipper','1 Pockets','1','10 inch','20 inch','6 inch','Laptop Bags','India']],
    82376:['Sapphire Smoke','images/bagsimage/bag5/',899,'Lion Roar','images/backgrounds/productbg6.svg',
    [3,'Polyester','Blue','1 Bag','Durable Material','18 inch','35 L','No','Yes','No','Zipper','1 Pockets','1','10 inch','20 inch','6 inch','Laptop Bags','India']],
    83474:['crimson red','images/bagsimage/bag6/',999,'Lucky One','images/backgrounds/productbg7.svg',
    [3,'Polyester','Blue','1 Bag','Durable Material','18 inch','35 L','No','Yes','No','Zipper','1 Pockets','1','10 inch','20 inch','6 inch','Laptop Bags','India']]
}


const details =['No of Compartments','Material','Color','Sales Package','Model Name','Compatible Laptop Size','Capacity','Rain Cover','Inner Lining','Hip Strap','Closure Type','Number of Pockets','Pack of','Width','Height','Depth','Generic Name','Country of Origin']

const productids =Object.keys(productdict)




function getallproduct(){
    var i=0
    while(i<productids.length){
        getproductsection1(productids[i]);
        i=i+1;
        getproductsection2(productids[i]);
        i=i+1;
    }
}
function getproductsection1(id){
    var product = productdict[id]
    var section1 =`
        <div class="section1">
        <div class="productsection">
            <div class="productimgandslogan">
                    <div class="slogan"><h1>`+product[3]+`</h1></div>
                    <a href="page/product.html?id=`+id+`" id="getproduct" ><img src="`+product[1]+`img1.png" alt=""></a>
                </div>
        </div>
        <div class="detailsection">
            <h1>`+product[0]+` BackPack</h1>
            <p><strong>Sea Shell</strong> is inspired by the generation of young achievers. They aim to craft accessories with thoughtful design, good
            aesthetics and functionality which could accompany many confident men and women who face their urban adventures with
            effortless charm, cool confidence, and fearless spirit. <strong>Sea Shell</strong>  presents one backpack that can serve you on different
            missions of your busy and adventurous life style. Its features include on the go charging port, water-resistance,
            lightweight and spacious design.</p>
        </div>
        </div>
    `
    document.write(section1)
}
function getproductsection2(id){
    var product = productdict[id]
    var section1 =`
        <div class="section2">
            <div class="productsection1">
                <div class="productimgandslogan">
                    <div class="slogan">
                        <h1>`+product[3]+`</h1>
                    </div>
                    <a href="page/product.html?id=`+id+`" id="getproduct" ><img src="`+product[1]+`img1.png" alt=""></a>
                </div>
            </div>
            <div class="detailsection1">
                <h1>`+product[0]+` BackPack</h1>
                <p><strong>Sea Shell</strong>  is inspired by the generation of young achievers. They aim to craft accessories with thoughtful design, good
            aesthetics and functionality which could accompany many confident men and women who face their urban adventures with
            effortless charm, cool confidence, and fearless spirit. <strong>Sea Shell</strong>  presents one backpack that can serve you on different
            missions of your busy and adventurous life style. Its features include on the go charging port, water-resistance,
            lightweight and spacious design.</p>
            </div>
        </div>
    `
    document.write(section1)
}


function getproductslider(){
    const id = parseInt(getIdFromHTTPS());
    const imgurl = '../'+productdict[id][1]
    for(var i=0;i<5;i++){
        var imageno =i+1;
        var slide =`
                <div class="sliderimagecontainer">
                    <img  src="`+imgurl+`img`+imageno+`.jpg" />
                </div>
        `
        document.write(slide)
    }

}

function getnameandprice(){
    const id = parseInt(getIdFromHTTPS());
    const name = productdict[id][0]
    const price = productdict[id][2]
    var nameandprice = `
        <div class="productpricesection">
            <h1>Name : `+name+` BackPack</h1>
            <h2>Price : Rs `+price+` per unit</h2>
        </div>
    `
    document.write(nameandprice)

}

function getdetails(){
    const id = parseInt(getIdFromHTTPS());
    const pdetails = productdict[id][5]


    for(var i=0;i<details.length;i++){
        var detail =`
        <div class="productdetail">
            <p>`+details[i]+`</p>
            <p>`+pdetails[i]+`</p>
        </div>
        `
        document.write(detail)
    }

}


function getIdFromHTTPS(){
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
    function (m, key, value) {
        vars[key] = value;
    });
    return parseInt(vars.id);
}