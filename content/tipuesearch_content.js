var tipuesearch = {"pages": [{'title': 'About', 'text': '國立虎尾科技大學機械設計工程系 \n National Formosa University \n Department of Mechanical Design Engineering \n cp2024 計算機程式 \n 課程教材: \n Learn Python with Jupyter  ( site ,  ebook ) \n 教育版帳號\xa0microsoftonline 登入點:\xa0 https://login.microsoftonline.com/ \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入  https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼:  ldodwua \n 個人倉儲:  https://github.com/mdecp2024/hw-zongye0615 \n 個人網站 :\xa0  https://mdecp2024.github.io/hw-zongye0615 \xa0 \n \n 其他資訊: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n', 'tags': '', 'url': 'About.html'}, {'title': 'Attendance', 'text': '出席 (10%) - 自行舉證評分 \n 自行利用 Github commits 提交記錄評分. \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW 1', 'text': '主題: 基於瀏覽器的分散式版次管理與整合程式開發環境 (10%) \n USB 隨身碟: \n 下載  python_2025_lite.7z  (428 MB, 解開壓縮後約 1.5 GB) \n Jupyter \n What are Github and Codespaces? \n Hello World - GitHub Docs \n 利用包含學號的字串作為帳號, 申請免費使用 Github. \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 1 \n \n PART 1: Creating the basics 資料整理 (10%) \n 啟動可攜程式系統後, 在命令列中: \n y:\\>cd notebook \n y:\\notebook>jupyter lab --collaborative \n 進入  01_string_input_print.ipynb  練習如何修改 PART1 notebook 後存檔, 上傳至作業倉儲中的 downloads 目錄後, 透過  https://nbviewer.org/  將已經提交的  01_string_input_print.ipynb , 嵌入下列網頁中. \n \n 上列 iframe 標註的 html 語法: \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n 完成上述流程整理後, 請將 HW1 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 1.html'}, {'title': 'HW 1 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 Topic 1 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 1 Exam.html'}, {'title': 'w10', 'text': '\xa0題目一 \n 題目二 \n \n 題目三 \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w12', 'text': '題目一 \n \n 題目二 \n \n 題目三 \n \n 題目四 \n \n 題目五 \n', 'tags': '', 'url': 'w12.html'}, {'title': 'w14', 'text': '\n \n from browser import html\nfrom browser import document as doc\nimport random\nimport math\n\n# 定義一個函式來初始化畫布\ndef initialize_canvas(canvas_width=400, canvas_height=400, id="brython_div1"):\n    """\n    初始化畫布，創建一個指定大小的 Canvas 元素，並將其加到 HTML 文件中。\n    返回畫布元素和它的 2D 繪圖上下文。\n    """\n    # 創建一個 canvas 元素，並設置其寬度與高度\n    canvas = html.CANVAS(width=canvas_width, height=canvas_height)\n    # 將創建的 canvas 元素添加到指定的 HTML div 元素中\n    brython_div = doc[id]  # 獲取指定 id 的 div 元素\n    brython_div <= canvas  # 將 canvas 插入到該 div 中\n     \n    # 獲取 canvas 的 2D 繪圖上下文，這是進行繪圖的主要接口\n    ctx = canvas.getContext("2d")\n     \n    # 返回畫布和它的 2D 繪圖上下文\n    return canvas, ctx\n\n# 定義一個隨機顏色生成函式\ndef random_color_generator():\n    """\n    生成一個隨機的 RGB 顏色字符串。\n    返回的顏色是 "rgb(r, g, b)" 格式，其中 r, g, b 是 0 到 255 之間的隨機整數。\n    """\n    r = random.randint(0, 255)  # 隨機生成紅色成分 (0-255)\n    g = random.randint(0, 255)  # 隨機生成綠色成分 (0-255)\n    b = random.randint(0, 255)  # 隨機生成藍色成分 (0-255)\n    return f"rgb({r}, {g}, {b})"  # 返回隨機顏色字符串\n\n# 判斷點 (px, py) 是否在圓內\ndef is_point_in_circle(px, py, cx, cy, r):\n    """\n    判斷一個點 (px, py) 是否位於圓 (cx, cy, r) 內。\n    (cx, cy) 為圓心坐標，r 為圓的半徑。\n    """\n    # 使用圓的方程 (px - cx)² + (py - cy)² <= r² 判斷點是否在圓內\n    return (px - cx) ** 2 + (py - cy) ** 2 <= r ** 2\n\n# 使用者設定的圓心座標和半徑，並進行掃描線填充\ndef draw_random_circles(num_circles):\n    """\n    根據隨機生成的圓心和半徑，繪製圓形並使用掃描線算法填充區域。\n    num_circles 是要生成的圓的數量\n    """\n    # 初始化畫布，創建並取得畫布和其 2D 上下文\n    canvas, ctx = initialize_canvas(400, 400)\n     \n    # 清空畫布，以便重新繪製\n    ctx.clearRect(0, 0, canvas.width, canvas.height)\n     \n    # 隨機生成圓的屬性 (圓心座標和半徑)\n    circles = []\n    for _ in range(num_circles):\n        # 隨機生成圓心 (cx, cy) 和半徑 r\n        cx = random.randint(50, canvas.width - 50)\n        cy = random.randint(50, canvas.height - 50)\n        r = random.randint(30, 80)  # 隨機半徑\n        circles.append((cx, cy, r))\n     \n    # 顏色區域存儲字典，存儲不同區域的顏色\n    color_dict = {}\n \n    # 使用掃描線方法填充區域，逐行掃描畫布上的每個像素\n    for py in range(0, canvas.height):  # 遍歷每一行的 y 坐標\n        # 當前掃描線的顏色初始化為 None，後面會根據位置選擇顏色\n        current_color = None\n         \n        # 遍歷當前行中的每個像素點 (px, py)\n        for px in range(0, canvas.width):  # 遍歷每一列的 x 坐標\n            colors_in_region = []\n\n            # 判斷該點是否在每個圓內，記錄在哪些圓內\n            for i, (cx, cy, r) in enumerate(circles):\n                if is_point_in_circle(px, py, cx, cy, r):\n                    colors_in_region.append(i)\n            \n            # 根據圓的交集區域填色\n            if colors_in_region:\n                # 根據圓的交集區域分配顏色\n                region_key = "intersection_" + "_".join(map(str, sorted(colors_in_region)))\n                if region_key not in color_dict:\n                    color_dict[region_key] = random_color_generator()\n                current_color = color_dict[region_key]\n            else:\n                # 如果點不在任何圓內，則是背景區域\n                current_color = "white"  # 背景色設為白色\n \n            # 設置當前像素的顏色並進行填充\n            ctx.fillStyle = current_color\n            # 填充當前像素 (px, py)，並且寬度和高度均為 1 像素\n            ctx.fillRect(px, py, 1, 1)  # 填充一個像素\n\n# 呼叫函式，繪製隨機數量的圓\ndraw_random_circles(num_circles=5)  # 例如隨機生成5個圓 \n \n', 'tags': '', 'url': 'w14.html'}, {'title': 'w13_hw', 'text': '\n  利用 Brython 繪圖  \n \n  引入 Brython 程式庫  \n \n \n  啟動 Brython  \n \n  設置容器  \n \n  利用 Brython 繪圖  \n \n', 'tags': '', 'url': 'w13_hw.html'}, {'title': 'w15', 'text': "從 1 累加到 100 \n # 使用 range() 生成從 1 到 100 的數字序列\n# sum() 函數將計算這些數字的總和\ntotal_sum = sum(range(1, 101))\n\n# 輸出結果\nprint(total_sum) \n addto \n # 定义 addto 函式，接受两个参数 start 和 end\ndef addto(start, end):\n    # 使用 range() 生成从 start 到 end 的数字序列，并计算它们的总和\n    total_sum = sum(range(start, end + 1))\n    return total_sum  # 返回计算的总和\n\n# 调用 addto 函式，计算从 1 到 100 的总和\nresult = addto(1, 100)\n\n# 输出结果\nprint(result) \n add_only_even  \n # 定义 add_only_even 函式，接受两个参数 start 和 end\ndef add_only_even(start, end):\n    # 使用 range() 生成从 start 到 end 的数字序列，只包含偶数\n    # 偶数的步长为 2，从最接近 start 的偶数开始\n    total_sum = sum(range(start + (start % 2), end + 1, 2))\n    return total_sum  # 返回计算的总和\n\n# 调用 add_only_even 函式，计算从 1 到 100 之间偶数的总和\nresult = add_only_even(1, 100)\n\n# 输出结果\nprint(result) \n add_avoid_8 \n # 定义 add_avoid_8 函式，接受两个参数 start 和 end\ndef add_avoid_8(start, end):\n    total_sum = 0  # 初始化总和为 0\n    \n    # 遍历从 start 到 end 之间的所有数字\n    for i in range(start, end + 1):\n        # 将数字转换为字符串并检查是否包含 '8'\n        if '8' not in str(i):\n            total_sum += i  # 如果不包含 '8'，将其加到总和\n    \n    return total_sum  # 返回最终的累加和\n\n# 调用 add_avoid_8 函式，计算从 1 到 100 之间不包含数字 '8' 的数字总和\nresult = add_avoid_8(1, 100)\n\n# 输出结果\nprint(result) \n \n", 'tags': '', 'url': 'w15.html'}, {'title': 'HW 2', 'text': '主題: Python 的數列、判斷式與重複迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 2 and Part 3 \n \n 延續 HW 1 網頁資料整理與程式練習方法, 整理下列內容 (20%): \n PART 2: Introduction to lists and if/else statements \n PART 3: Introduction to the for loop \n 完成上述流程整理後, 請將 HW2 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 2.html'}, {'title': 'HW 2 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 2 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n \n', 'tags': '', 'url': 'HW 2 Exam.html'}, {'title': 'w16_exam1', 'text': 'w16程式碼 \n', 'tags': '', 'url': 'w16_exam1.html'}, {'title': 'HW 3', 'text': '主題: Python 的數字、演算法與迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 4 and Part 5 \n 完成上述流程整理後, 請將 HW3 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 3.html'}, {'title': 'HW 3 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 3 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 3 Exam.html'}, {'title': 'w16_exam2', 'text': 'w16_exam2程式碼 \n', 'tags': '', 'url': 'w16_exam2.html'}, {'title': 'HW 4', 'text': '主題: 利用 Python 控制機電模擬系統 (20%) \n 利用\xa0 https://solvespace.com/ \xa0建立機械系統零組件 \n 利用  CoppeliaSim  建立機電模擬系統 \n 利用  Python  跨網路控制瀏覽器上的機電模擬系統 \n 範例: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n 完成上述流程整理後, 請將 HW4 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 4.html'}, {'title': 'HW 4 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 4 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 4 Exam.html'}, {'title': 'w16_exam3', 'text': 'w16_exam3程式碼 \n', 'tags': '', 'url': 'w16_exam3.html'}, {'title': 'Final Report', 'text': '期末口頭與書面專題報告 (20%) \n 期末口頭專題報告影片: \n ...... \n 期末書面專題報告檔案 (pdf): \n ...... \n 電腦輔助設計與實習課程總結心得: \n ...... \n 期末報告自評成績: \n 完成上述流程後, 請將 Final Report 自評分數輸入 cp2024 自評表單中. \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'Final Report.html'}, {'title': 'Brython', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};