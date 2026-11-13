# Phóng Sinh Online (bản kiểm tra)

Ứng dụng phóng sinh 3D chạy trên trình duyệt, dùng header, footer và phong cách của trang chủ AppNho.

## Cấu trúc thư mục

```
phong-sinh/               (tên repo, đặt tùy ý)
├── index.html            Trang bọc: header AppNho + khung ứng dụng + giới thiệu + footer AppNho
├── app.html              Ứng dụng Phóng Sinh (toàn màn hình, được nhúng vào index.html)
├── assets/
│   ├── appnho-lite.css   Giao diện header/footer dự phòng để trang chạy độc lập
│   └── appnho-shell.js   Script menu header (sao chép từ trang chủ AppNho)
├── .nojekyll
└── README.md
```

## Đưa lên GitHub Pages

1. Tạo repo mới trên GitHub (ví dụ `phong-sinh`, chế độ Public).
2. Giải nén file zip, rồi **Add file → Upload files**, kéo toàn bộ nội dung vào (nhớ cả thư mục `assets` và file `.nojekyll`), bấm **Commit changes**.
3. Vào **Settings → Pages**, mục *Build and deployment* chọn **Deploy from a branch**, nhánh `main`, thư mục `/ (root)`, bấm **Save**.
4. Đợi khoảng 1 phút rồi mở `https://qualokhach.github.io/phong-sinh/`.

Trang tự tải nhạc từ repo `nhac-cua-minh` (`songs.json` và thư mục `notes`), nên repo đó cần giữ nguyên và đã bật Pages.

## Giao diện AppNho

- `index.html` nạp `assets/appnho-lite.css` trước, rồi nạp `assets/appnho.css`, `assets/appnho-shell.css` và `assets/appnho-header.js` trực tiếp từ `https://appnho.io.vn/assets/`. Nếu tải được, giao diện gốc của AppNho sẽ ghi đè bản dự phòng.
- Nếu muốn tắt hẳn bản gốc và chỉ dùng bản dự phòng, xóa 3 dòng trỏ tới `appnho.io.vn/assets`.
- Mọi liên kết trong header và footer đã đổi thành địa chỉ đầy đủ `https://appnho.io.vn/...` để bấm được ngay trong repo test.

## Khi tích hợp vào AppNho sau này

1. Đặt thành `apps/phong-sinh/index.html` và `apps/phong-sinh/app.html`.
2. Trong `index.html`: đổi các đường dẫn `assets/...` thành `../../assets/...`, xóa `appnho-lite.css` và `appnho-shell.js` (hệ thống chung đã có), đổi liên kết header và footer về dạng tương đối như homepage.
3. Thêm đoạn Google Analytics (`G-K9C4KKZPEE`) và AdSense giống homepage nếu muốn.
4. Thêm Phóng Sinh vào danh sách Apps của header, footer và trang `apps/index.html`.
5. Thay `og:image` bằng ảnh chụp cảnh thả cá để Facebook hiện ảnh xem trước đẹp.
