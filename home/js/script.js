var navigationItems = [
    {
        name: "Home",
        href: "/home",
        icon: "fas fa-home",
    },
    {
        name: "Lofi Hip Hop",
        href: "/lofi-hip-hop",
        icon: "fas fa-music",
    },
    {
        name: "CalcMedia",
        href: "https://github.com/oDragonGuysPc/CalcMedia/",
        icon: "fab fa-windows",
    },
    {
        name: "UNO Game Website",
        href: "https://odragonguyspc.github.io/UNO-Game/website/",
        icon: "fas fa-dice-d6"
    }
]


function createItem(item) {
    var i = document.createElement("i");
    i.className = item.icon;

    var icon = document.createElement("span");
    icon.className = "icon";
    icon.appendChild(i);

    var title = document.createElement("span");
    title.className = "title";
    title.title = item.name;
    title.innerHTML = item.name;

    var a = document.createElement("a");
    a.href = item.href;
    a.appendChild(icon);
    a.appendChild(title);

    var li = document.createElement("li");
    if (item.onclick) { li.addEventListener("click", item.onclick) };
    li.appendChild(a);

    var navigation = document.querySelector(".navigationContainer .navigation ul");
    navigation.appendChild(li);
}


navigationItems.forEach(item => { createItem(item); });
document.getElementsByClassName("toggle")[0].click();
