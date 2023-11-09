<template>
    <div>
        <div class="contai">
            <h1 class="h1">Formulario de Envío de Correo</h1>
            <form class="form" id="email-form">
                <label class="label" for="to">De:</label>
                <input class="input" type="email" id="to" name="to" required>
    
                <label class="label" for="subject">Asunto:</label>
                <input class="input" type="text" id="subject" name="subject" required>
    
                <label for="message">Mensaje:</label>
                <textarea class="textarea" id="message" name="message" rows="6" required></textarea>
    
                <button class="boton" type="submit">Enviar Correo</button>
            </form>
        </div>
    </div>
</template>
<style>


.contai {
    max-width: 400px;
    margin: 5rem 30rem 40rem 42rem;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 5 px;
}

.h1 {
    text-align: center;
}

.form {
    text-align: left;
}

.label, .input, .textarea {
    display: block;
    margin-bottom: 10px;
}

.input, .textarea {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.boton {
    display: block;
    width: 100%;
    background-color: #007BFF;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
}

.boton:hover {
    background-color: #0056b3;
}


</style>