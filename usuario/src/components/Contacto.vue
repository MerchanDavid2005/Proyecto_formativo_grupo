<template>
    <center>
        
        <div class="Container">
            <ul>
            <li>
                <center>
                    <div class="light-button-html">
                        <button class="bt-html">
                            <div class="light-holder-html">
                                <div class="dot-html"></div>
                                <div class="light-html"></div>
                            </div>
                            <div class="button-holder-html">
                                <img id="img" src="../assets/images/icons8-whatsapp-50.png" alt="">
                                <p>whatsapp</p>
                            </div>
                        </button>
                    </div>
                </center>
            </li>
        </ul>
        <ul>
            <h3 style="color:aliceblue">Tel: +57 311 5829499 4</h3>
        </ul>
        <ul>
            <li>
                <center>
                    <a class="contac" href="https://wa.link/zmbm5w">Contactar</a>
                </center>
            </li>
        </ul>
    </div>
</center>
</template>

<script>
    

</script>

<style scoped>

.Container{
    background-color: #ffffff3b;
    width: 40vh;
    height: 50vh;
    padding: 1rem;
    border-radius: 5px;
}

.contac{
    display: inline-block;
    padding: 10px 20px;
    margin-top: 20px;
    text-align: center;
    text-decoration: none;
    background-color: #1df13a; 
    color: #fff;
    border-radius: 5px;
}

.contac:hover{
    background-color: #379c45;
}

.contac{

}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

#img{
    display: none;
}

.bt-html:hover #img{
    display: block;
}

.light-button-html button.bt-html {
    position: relative;
    height: 200px;
    display: flex;
    align-items: flex-end;
    outline: none;
    background: none;
    border: none;
}
  
.light-button-html button.bt-html .button-holder-html {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;
    background-color: #0a0a0a;
    border-radius: 5px;
    color: #0f0f0f;
    font-weight: 700;
    transition: 300ms;
    outline: #1df13a 2px solid;
    outline-offset: 20;
}
  
.light-button-html button.bt-html .button-holder-html svg {
    height: 50px;
    fill: #0f0f0f;
    transition: 300ms;
}
  
.light-button-html button.bt-html .light-holder-html {
    position: absolute;
    height: 200px;
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
  
.light-button-html button.bt-html .light-holder-html .dot-html {
    position: absolute;
    top: 0;
    width: 10px;
    height: 10px;
    background-color: #0a0a0a;
    border-radius: 10px;
    z-index: 2;
}
  
.light-button-html button.bt-html .light-holder-html .light-html {
    position: absolute;
    top: 0;
    width: 200px;
    height: 200px;
    clip-path: polygon(50% 0%, 25% 100%, 75% 100%);
    background: transparent;
}
  
.light-button-html button.bt-html:hover .button-holder-html svg {
    
    fill: rgb(47, 228, 30);
}
  
  .light-button-html button.bt-html:hover .button-holder-html {
    color: rgb(47, 228, 30);
    outline: rgb(1, 1, 1) 2px solid;
    outline-offset: 2px;
}
  
.light-button-html button.bt-html:hover .light-holder-html .light-html {
    background: rgb(47, 228, 30);
    background: linear-gradient(180deg, rgb(47, 228, 30) 0%, rgba(255, 10, 10, 0) 75%, rgba(255, 7, 7, 0) 100%);
}


</style>