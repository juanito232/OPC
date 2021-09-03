<template>
    <div>
        <img src="https://icon-library.com/images/accounting-icon/accounting-icon-1.jpg" alt="">
        <div class="form">
            <form action="">
                <h1>
                    Registro
                </h1>
                <div class="inputs">
                    <label for="name">
                        Nombres
                    </label>
                    <input type="text" name="name">
                </div>
                <div class="inputs">
                    <label for="user">
                        Correo electrónico
                    </label>
                    <input type="text" name="correo">
                </div>
                <div class="inputs">
                    <label for="password">
                        Contraseña
                    </label>
                    <input type="password" name="password">
                </div>
                <button>
                    Registrarse
                </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'registro'
}
</script>

<style scoped>
img {
    width: 12em;
    height: 12em;
}
.form {
    padding-top: 5em;
}
form div {
    padding-top: 2em;
}
button {
    margin-top: 2em;
}
.inputs {
    width: 28%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
}
</style>