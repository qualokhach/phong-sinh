# AppNho – Phóng Sinh (bản kiểm tra độc lập)

Repo này chạy độc lập bằng GitHub Pages để kiểm tra ứng dụng trước khi tích hợp vào website AppNho.

## Cấu trúc

```text
phong-sinh/
├── index.html
├── README.md
└── assets/
    └── (để trống ở bản hiện tại; có thể thêm âm thanh/hình ảnh tự lưu sau)
```

## Đưa lên GitHub

1. Tạo repository mới, ví dụ `appnho-phong-sinh`.
2. Upload toàn bộ nội dung thư mục này, giữ `index.html` ở thư mục gốc repo.
3. Mở **Settings → Pages**.
4. Ở **Build and deployment**, chọn **Deploy from a branch**.
5. Chọn branch `main`, folder `/ (root)`, nhấn **Save**.
6. Đợi GitHub Pages triển khai, mở URL dạng `https://TEN-USER.github.io/appnho-phong-sinh/`.

## Công nghệ và lưu ý

- Ứng dụng 3D dùng Three.js r128 tải từ CDN cdnjs; cần kết nối Internet.
- Font Baloo 2 và Nunito tải từ Google Fonts.
- Không cần build, npm, backend, database hay API key.
- Các cảnh, cá, rùa, chim, hiệu ứng nước và thao tác ghi/chia sẻ video vẫn nằm trong `index.html`.
- Header/footer dùng nhận diện AppNho và các liên kết điều hướng về `https://appnho.io.vn/`.
- Bản repo độc lập chưa cài GA4/AdSense; nên kiểm thử tính năng trước. Khi tích hợp chính thức, sẽ dùng shell/header/footer và cấu hình đo lường theo website chính.
- Chia sẻ video phụ thuộc khả năng `MediaRecorder` và codec của trình duyệt. Một số trình duyệt sẽ xuất WebM thay vì MP4.
- GitHub Pages chỉ phục vụ file tĩnh qua HTTPS; không lưu dữ liệu cá nhân hay nội dung lời nguyện lên máy chủ.
