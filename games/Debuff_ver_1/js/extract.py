import re
import json

# 提取main.js中的textOrder语句
def extract_text_order(file_path, output_path):
    pattern = re.compile(r'textOrder\(".*?",".*?"\)')
    results = {}

    with open(file_path, 'r', encoding='utf-8') as file:
        for line_num, line in enumerate(file, start=1):
            match = pattern.search(line)
            if match:
                results[line_num] = match.group()

    with open(output_path, 'w', encoding='utf-8') as json_file:
        json.dump(results, json_file, indent=4, ensure_ascii=False)

# 主程序调用
extract_text_order('main.js', 'proc.json')
