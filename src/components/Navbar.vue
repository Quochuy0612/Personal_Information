<template>
    <nav class="flex flex-row justify-between items-center">
        <div class="logo basis-2/6 text-center text-xl font-semibold cursor-pointer">
            HuyDVQ
        </div>

        <ul id="top-nav" class="basis-3/6 hidden lg:flex lg:items-center lg:justify-end lg:gap-16 uppercase text-base font-bold mb-0">
            <li class="top-nav-item">
                <a>Home</a>
            </li>
            <li class="top-nav-item">
                <a>About</a>
            </li>
            <li class="top-nav-item">
                <a>Resum</a>
            </li>
            <li class="top-nav-item">
                <a>Works</a>
            </li>
            <li class="top-nav-item">
                <a>Blog</a>
            </li>
            <li class="top-nav-item">
                <a>Contact</a>
            </li>
        </ul>

        <div class="basis-1/6 lg:hidden flex items-center cursor-pointer px-2 sm:px-4">
            <svg id="toggle-top-nav-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </div>
    </nav>
</template>


<script setup>
const topNav = document.getElementById('top-nav')
const toggleTopNavIcon = document.getElementById('toggle-top-nav-icon')

// document.addEventListener('click', (el) => {
//     if (toggleTopNavIcon.contains(el.target)) {
//         console.log('123')
//     } else {
//         // if(topNav){

//         // }
//     }
// })
</script>

<style scoped></style>