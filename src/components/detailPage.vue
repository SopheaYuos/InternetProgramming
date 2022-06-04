<template>
  <main>
    <!-- Add to cart section -->

    <section class="top-section">
      <div class="img-section">
        <img src="../assets/macbook-main.jpg" alt="" />
        <div class="sub-img-section">
          <img src="../assets/macbook-topview1.jpg" alt="" />
          <img src="../assets/macbook-topview2.jpg" alt="" />
        </div>
      </div>
      <div class="add-to-card-section">
        <h2>MacBook Pro 16 Inch</h2>

        <p class="brand">Brand: &nbsp; <span>Apple </span></p>
        <h3 class="price">$2300</h3>
        <hr />
        <div class="addtocart">
          <button class="button">Add to cart</button>
          <h3><fa icon="heart" class="icon" /> Add to favorite</h3>
        </div>
        <div class="reaction">
          <div>
            <fa icon="thumbs-up" class="icon" />
            Like
          </div>
          <div><fa icon="share" class="icon" /> Share</div>
          <div><fa icon="comment" class="icon" />Comment</div>
        </div>
      </div>
    </section>

    <!-- decription section -->

    <section class="description-section">
      <h1>description</h1>
      <div align="left">
        <p>
          FREE : Original Accessories Bag, Mouse Gaming, Headset Gaming, Mouse
          Pad.
        </p>
        <hr />
        <ul class="desc">
          <li>
            CPU: AMD Ryzen™ 7 5800H Processor (Cores8,Threads16, 3.2GHz Up to
            4.4GHz)
          </li>
          <li>RAM: 8GB DDR4 -Storage: SSD 512GB M2 PCIE -Optical Drive: N/A</li>
          <li>Graphic 1: NVIDIA® GeForce® RTX3050Ti 4GB GDDR6</li>
          <li>
            Graphic 2: AMD Radeon™ Graphics -Display: 15.6-FHD(1920 x 1080)
            IPS-Level 120Hz
          </li>
          <li>Wi-Fi 6</li>
          <li>
            Bluetooth 5.0 2x USB 3.2 Gen 1 1x USB-C 3.2 Gen 1 (support data
            transfer only)
          </li>
          <li>
            1x HDMI 2.0 1x Ethernet (RJ-45) 1x Headphone / microphone combo jack
            (3.5mm) 1x Power connector -Backlit keyboard
          </li>

          <li>Battery: 3 Cell 45Wh -Weight: 2.25kg</li>
          <li>
            Color: Black Warranty 1year hardware -6 months for screen, keyboard
            & battery
          </li>
        </ul>
      </div>
    </section>

    <!-- Product section -->

    <section class="product-section">
      <div class="sub-product-section">
        <img src="../assets/macbook1.jpg" alt="" />
        <div class="title-product-section">
          MSI Vector GP76 12UGS-642KHS (i7 12700H / 16GB / S...
        </div>
        <div>$2700.00</div>
        <div class="product-icon-section">
          <fa icon="shopping-cart" />
          <fa icon="eye" />
          <fa icon="heart" />
        </div>
      </div>
      <div class="sub-product-section">
        <img src="../assets/macbook1.jpg" alt="" />
        <div class="title-product-section">
          MSI Vector GP76 12UGS-642KHS (i7 12700H / 16GB / S...
        </div>
        <div>$2700.00</div>
        <div class="product-icon-section">
          <fa icon="shopping-cart" />
          <fa icon="eye" />
          <fa icon="heart" />
        </div>
      </div>
      <div class="sub-product-section">
        <img src="../assets/macbook1.jpg" alt="" />
        <div class="title-product-section">
          MSI Vector GP76 12UGS-642KHS (i7 12700H / 16GB / S...
        </div>
        <div>$2700.00</div>
        <div class="product-icon-section">
          <fa icon="shopping-cart" />
          <fa icon="eye" />
          <fa icon="heart" />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap");
* {
  box-sizing: border-box;
}
.top-section {
  /* border: 1px solid; */
  display: flex;
  justify-content: center;
  /* padding: 0 5rem; */
  /* width: 100%; */
}
.img-section > img {
  width: 70%;
}
.img-section,
.add-to-card-section {
  width: 100%;
}
.add-to-card-section {
  padding-top: 2.5rem;
}
.sub-img-section {
  display: flex;
  justify-content: center;
}

.add-to-card-section .rating {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  width: 60%;
}
.price {
  margin-bottom: 2px;
  margin: 2px 0;
}
.price,
h2 {
  text-align: left;
  font-size: 2rem;
  /* color: black; */
}

.brand {
  text-align: left;
}

hr {
  border: 0;
  height: 1px;
  background: #333;
  background-image: linear-gradient(to right, #ccc, #333, #ccc);
  margin-right: 20px;
}
.button,
.description-section h1 {
  border: none;
  /* color: rgba(87, 0, 0, 0.007); */
  background-color: #0096c8;
  padding: 2px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 1px;
  height: 45px;
  font-weight: bold;
  color: #fff;
}

.button:hover {
  background-color: #047499;
}

.addtocart {
  display: flex;
  justify-content: space-between;
  width: 50%;
}
.addtocart h3 {
  color: rgb(168, 61, 61);
  cursor: pointer;
}
.reaction {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  width: 50%;
}
.description-section {
  text-align: left;
  margin: 1rem 10rem;
}
.description-section h1 {
  margin: 1rem 0;
  height: 100%;
  padding: 10px;
  text-transform: capitalize;
  text-align: left;
}
.desc {
  clear: both;
  font-size: 1em;
  line-height: 150%;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.icon {
  height: 25px;
  color: #0096c8;
  cursor: pointer;
}
.icon:hover {
  color: #c81f27;
}
.product-section {
  display: flex;
  justify-content: center;
}

.product-icon-section {
  margin: 1rem auto 0;
  display: flex;
  justify-content: space-evenly;
  color: rgb(82, 75, 75);
  font-size: 1.5rem;
  width: 10vw;
}
.title-product-section {
  width: 50%;
  margin: 0 auto;
  margin-bottom: 1rem;
  /* border: blue; */
}
.sub-product-section img {
  width: 60%;
}
</style>