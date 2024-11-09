// Lấy phần tử toggle và icon
const toggleButton = document.getElementById('dark-mode-toggle');
const toggleIcon = toggleButton.querySelector('i');

// Hàm chuyển đổi Dark Mode
function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    updateToggleIcon(isDarkMode);
}

// Hàm cập nhật icon
function updateToggleIcon(isDarkMode) {
    if (isDarkMode) {
        toggleIcon.classList.remove('fa-moon');
        toggleIcon.classList.add('fa-sun');
    } else {
        toggleIcon.classList.remove('fa-sun');
        toggleIcon.classList.add('fa-moon');
    }
}

// Kiểm tra trạng thái Dark Mode từ LocalStorage khi tải trang
document.addEventListener('DOMContentLoaded', () => {
    const darkModeSetting = localStorage.getItem('darkMode');
    const isDarkMode = darkModeSetting === 'enabled';

    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
    updateToggleIcon(isDarkMode);
});

// Lắng nghe sự kiện click
toggleButton.addEventListener('click', toggleDarkMode);
