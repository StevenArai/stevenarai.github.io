import json
import re

# 替换main.js中的textOrder语句
def replace_lines(file_path, json_path):
    with open(json_path, 'r', encoding='utf-8') as json_file:
        replacements = json.load(json_file)

    with open(file_path, 'r', encoding='utf-8') as file:
        lines = file.readlines()

    # 定义正则表达式来匹配line中的textOrder
    pattern = re.compile(r'textOrder\(".*?",".*?"\)')

    # 替换对应行中的textOrder语句
    for line_num, replacement in replacements.items():
        index = int(line_num) - 1
        if 0 <= index < len(lines):
            # 查找该行中的textOrder，并替换
            line = lines[index]
            updated_line = re.sub(pattern, replacement, line)
            lines[index] = updated_line

    with open(file_path, 'w', encoding='utf-8') as file:
        file.writelines(lines)

# 主程序调用
replace_lines('main.js', 'proc.json')
