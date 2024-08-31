import os
from PIL import Image

# 定义源目录和目标目录
source_dir = "."
target_dir = ".\\fin"

# 确保目标目录存在
os.makedirs(target_dir, exist_ok=True)

# 遍历并处理所有 PNG 文件
for i in range(176):  # 假设图像名称为 0.png 到 175.png
    filename = f"{i}.webp"
    source_path = os.path.join(source_dir, filename)
    
    if os.path.exists(source_path):
        # 打开图像并转换为 WebP 格式
        with Image.open(source_path) as img:
            if img.height > img.width:
                img = img.resize((600, int(img.height/img.width*600)), Image.LANCZOS)
            else:
                img = img.resize((int(img.width/img.height*600), 600), Image.LANCZOS)
            target_path = os.path.join(target_dir, f"{i}.webp")
            img.save(target_path, "WEBP", quality=100, method=6)  # 使用最高压缩质量
            #img.save(target_path, "WEBP", lossless=True)
            print(f"已压缩并保存图像 {filename} 到 {target_path}")

print("所有图像已成功压缩并保存。")