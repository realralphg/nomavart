<template>
    
     <div class="wrapper">
        <div class="bg-positive q-py-md"></div>
        <h1 class="text-primary text-weight-bold">Our Team</h1>
        <p></p>
        <div class="grid">
            <div class="grid-item">
                <figure>
                    <img src="/images/Habibu.jpg" alt="">
                    <figcaption>HABIBU ZAKARI AMINU</figcaption>
                </figure>
            </div>
            <div class="grid-item">
                <figure>
                    <img src="/images/Jerry.jpg" alt="">
                    <figcaption>JERRY MATTHEW WAZIRI</figcaption>
                </figure>
            </div>
            <div class="grid-item">
                <figure>
                    <img src="/images/Ezekiel.jpg" alt="">
                    <figcaption>Bulus Ezekiel Doka</figcaption>
                </figure>
            </div>
            <div class="grid-item">
                <figure>
                    <img src="/images/Hosea.jpg" alt="">
                    <figcaption>HOSEA YAKUBU</figcaption>
                </figure>
            </div>
            <div class="grid-item">
                <figure>
                    <img src="/images/buba.jpg" alt="">
                    <figcaption>MOHAMMED YUSUF</figcaption>
                </figure>
            </div>
            <div class="grid-item">
                <figure>
                    <img src="/images/bargo.jpg" alt="">
                    <figcaption>IILIYA BAGRO DUNIYA</figcaption>
                </figure>
            </div>
            <div class="grid-item">
                <figure>
                    <img src="/images/ayok.jpg" alt="">
                    <figcaption>AYOK CELESTINE NACHE</figcaption>
                </figure>
            </div>
            <!-- <div class="grid-item">
                <figure>
                    <img src="https://unsplash.it/250/187?image=408" alt="">
                    <figcaption>Image Title</figcaption>
                </figure>
            </div>
            <div class="grid-item">
                <figure>
                    <img src="https://unsplash.it/250/187?image=409" alt="">
                    <figcaption>Image Title</figcaption>
                </figure>
            </div>
            <div class="grid-item">
                <figure>
                    <img src="https://unsplash.it/250/187?image=411" alt="">
                    <figcaption>Image Title</figcaption>
                </figure>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang='scss' scoped>
.grid{
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    &-item{
        min-width: 250px;
        max-width: 250px;
        // min-height: 400px;
        flex: 1 1 250px;
        padding-left: .5rem;
        padding-right: .5rem;
        margin: 1rem;

    }
}

// Styles
.wrapper{
    min-height: 100vh;
    // padding: 2rem 0;
    background: #e5e5e5;
    color: #1111;
    // font-family: 'Roboto', sans-serif;
    text-align: center;

    h1{
        font-size: 3.125em;
        line-height: 1.5;
    }

    p{
        font-size: 1em;
        line-height: 1.5;
        margin-bottom: 1rem;
        color: #111;
    }
}

.grid{
    &-item{
        figure{
            padding: 0;
            margin: 0;
            box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.05);

            img{
                display: block;
                max-width: 100%;
                height: 300px;
                width: 100%;
                object-fit: cover;
            }
        }

        figcaption{
            display: block;
            padding: .625rem .5rem;
            color: #111;
            // background: lighten(#40424a, 3%);
        }
    }
}
</style>