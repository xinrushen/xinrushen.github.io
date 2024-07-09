function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    
    if (sidebar.style.left === '-250px') {
        sidebar.style.left = '0';
        content.style.marginLeft = '250px';
    } else {
        sidebar.style.left = '-250px';
        content.style.marginLeft = '0';
    }
}

