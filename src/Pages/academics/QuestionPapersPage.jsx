import { useState, useEffect } from 'react'
import { ArrowLeft, Download, Search, Filter, ChevronDown, BarChart2, Book, History } from 'lucide-react'
import { Link } from 'react-router-dom'
import EnglishW22 from "../../Documents/BrochurePDF.pdf"
import './QuestionPapersPage.css'

const departments = [
  {
    id: "computer",
    name: "Computer Engineering",
    subjects: {
      "sem1": [
        {
          id: "eng",
          name: "English",
          code: "22101",
          papers: [
            {
              id: "eng-s18",
              title: "Summer 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/114LuW34i_fzQeNlfJeeg5LldGDQzOBJr/view?usp=drive_link",
              downloadCount: 156,
              lastDownloaded: "2024-01-12",
              fileSize: "386 kB"
            },
            {
              id: "eng-w18",
              title: "Winter 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1_Qc0ZHsYMKfQnoVy3pTeB9Q_7KVSL7bf/view?usp=drive_link",
              downloadCount: 146,
              lastDownloaded: "2024-01-12",
              fileSize: "286 kB"
            },
            {
              id: "eng-s19",
              title: "Summer 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1S2AWAP-o3bFJyVAvT0OIxdU2Vb0n1mT4/view?usp=drive_link",
              downloadCount: 156,
              lastDownloaded: "2024-01-12",
              fileSize: "387 kB"
            },
            {
              id: "eng-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1-7DJaioyudQR5R-aA2eObpzj3R6lmBow/view?usp=drive_link",
              downloadCount: 156,
              lastDownloaded: "2024-01-12",
              fileSize: "190 kB"
            },
            {
              id: "eng-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1lovyDdhT38FkvsOHET6ro6OosA3h2yhk/view?usp=drive_link",
              downloadCount: 234,
              lastDownloaded: "2024-01-10",
              fileSize: "115 kB"
            },
            {
              id: "eng-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1OHlCLN86lxrH1vKfZodaTwJFcc3QBKHP/view?usp=drive_link",
              downloadCount: 567,
              lastDownloaded: "2024-01-05",
              fileSize: "105 kB"
            }
          ]
        },
        {
          id: "math",
          name: "Basic Mathematics",
          code: "22102",
          papers: [
            {
              id: "math-s18",
              title: "Summer 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/10zLf18xyp_PX88CpGPEf6wHdFR-lfuql/view?usp=drive_link",
              downloadCount: 189,
              lastDownloaded: "2024-01-11",
              fileSize: "90 kB"
            },
            {
              id: "math-w18",
              title: "Winter 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1byqHe8QH_QOlk63f6Hl6uV_RLCDUqYtD/view?usp=drive_link",
              downloadCount: 189,
              lastDownloaded: "2024-01-11",
              fileSize: "342 kB"
            },
            {
              id: "math-s19",
              title: "Summer 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1IhYm2Gbjn0WjigdKkcXmYfMMBHGbNL4V/view?usp=drive_link",
              downloadCount: 189,
              lastDownloaded: "2024-01-11",
              fileSize: "399 kB"
            },
            {
              id: "math-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/15YKLvt44UPRV85KD2X5ZWBVPdQWvxRUk/view?usp=drive_link",
              downloadCount: 189,
              lastDownloaded: "2024-01-11",
              fileSize: "147 kB"
            },
            {
              id: "math-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1xTHMkntGsGLAbLOvv-C-LYhVB0ZxFDDN/view?usp=drive_link",
              downloadCount: 189,
              lastDownloaded: "2024-01-11",
              fileSize: "236 kB"
            },
            {
              id: "math-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1UZV_iE3b88drgBv59Z6i_haaXNAYGaX2/view?usp=drive_link",
              downloadCount: 245,
              lastDownloaded: "2024-01-09",
              fileSize: "123 kB"
            },
            {
              id: "math-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1uiHgggjrzgpFCT7a_HT9zlWnyPGeVVdk/view?usp=drive_link",
              downloadCount: 245,
              lastDownloaded: "2024-01-09",
              fileSize: "123 kB"
            }
          ]
        }
      ],
      "sem2": [
        {
          id: "programming",
          name: "Programming in C",
          code: "22226",
          papers: [
            {
              id: "prog-s18",
              title: "Summer 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1eZQwTmaZzc4kfRfyQ408MGPsXF2Xmvo9/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "376 kB"
            },
            {
              id: "prog-w18",
              title: "Winter 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1cUgKWUYEIHhWrr7NzQmoearEzfHXch7H/view?usp=drive_link",
              downloadCount: 148,
              lastDownloaded: "2024-01-12",
              fileSize: "395 kB"
            },
            {
              id: "prog-s19",
              title: "Summer 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1wNiVUT2w_ZraYn8LbUi_9Sce225EKupk/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "372 kB"
            },
            {
              id: "prog-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/11MLZ_Vu6bEyJ1DmF7hRgBBWg7wao2tvA/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "383 kB"
            },
            {
              id: "prog-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1g70wj-W1YwqmHTVK3zrGJbjDQWlrNzVP/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "98 kB"
            },
            {
              id: "prog-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1FZDixHC2vt0d5z7LI-5gKb0-gHJhYf5H/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "98 kB"
            },
            {
              id: "prog-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1d3MpOZdBI3t05MthN7odX7rDoXbHeaDT/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "99 kB"
            },
            {
              id: "prog-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1dTdWDIuMAp1eyRxtEywXZy_ExldlWxjP/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "103 kB"
            }
          ]
        },
        {
          id: "Applied maths",
          name: "Applied Mathematics",
          code: "22224",
          papers: [
            {
              id: "am-s18",
              title: "Summer 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1JK_F2tVGSsFOAvzu2Wn8OCH-TBDADU5U/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "271 kB"
            },
            {
              id: "am-w18",
              title: "Winter 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1HfpuGaqyDL9GMJPTGbtyNjtCr-DCfBLP/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "237 kB"
            },
            {
              id: "am-s19",
              title: "Summer 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1Sbwb890FhKQacSpEdZwuirEmzIqlRK6G/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "217 kB"
            },
            {
              id: "am-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1p-PxvhNI1p7_9M5zUSwPz14Gmc0GsASD/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "242 kB"
            },
            {
              id: "am-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1FYDGZzPxnAAGLL3iYPFFLRejx__ajGYh/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "139 kB"
            },
            {
              id: "am-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1bTr4ZayfvFefYh43To7pXgAxMo5dE7re/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "133 kB"
            },
            {
              id: "am-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1VNqv6_-vUW9e-zPu_H-xct0Eqck37U9p/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "149 kB"
            },
            {
              id: "am-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/16fwloa1VgCJkLT7X7s2n-MEwtOR6HZVh/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "129 kB"
            }
          ]
        },
        {
          id: "Basic Electronics",
          name: "Basic Electronics",
          code: "22225",
          papers: [
            {
              id: "be-s18",
              title: "Summer 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1km32kNcSA9bjZeGHIBFrJp8w2dJ4th4G/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "461 kB"
            },
            {
              id: "be-w18",
              title: "Winter 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1GM2mwaWuYYWp3Ma8zMFwEiuOA1i8hnWq/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "404 kB"
            },
            {
              id: "be-s19",
              title: "Summer 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/11TBZxQ6la2YfVNkdvJhKbqLTCb1nvR4B/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "209 kB"
            },
            {
              id: "be-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1xbZx3mhHtr7yu7hVodFVUzrXh89fx53I/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "193 kB"
            },
            {
              id: "be-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/19tyUfj7zPrLfGBPk8Hi_XU8SG3LoR_cY/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "232 kB"
            },
            {
              id: "be-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1I6mBimGRIjgYHsHah2KZTKaxi_zYgWc9/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "210 kB"
            },
            {
              id: "be-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1gMkTEJ_49CfMaDOqaEO5VrxXbCozIQUG/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "159 kB"
            },
            {
              id: "be-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1Vl0rStoA6vjf061zjS3xPa3K4DUk4m0o/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "136 kB"
            }
          ]
        },
        {
          id: "Electrical",
          name: "Electrical Engineering",
          code: "22215",
          papers: [
            {
              id: "ee-s18",
              title: "Summer 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1gv5J3XJ8VZ5aBpnTqZ5Ue7U-wvYJHjRa/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "176 kB"
            },
            {
              id: "ee-w18",
              title: "Winter 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1D9zkQbQZaQVnmUlu-ztO08KuXuiCDouc/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "186 kB"
            },
            {
              id: "ee-s19",
              title: "Summer 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1DxeAtPjKLTk9VFa4kqfeIueZNKkySGy9/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "211 kB"
            },
            {
              id: "ee-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1kcGND-fFqIZSW1VQPfr7c-J0dBXbtSQ4/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "198 kB"
            },
            {
              id: "ee-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1kIgsQNavTmyDDLsX0EMTQIGmFdVhSpOp/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "99 kB"
            },
            {
              id: "ee-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1cnv6jfgv_PwOSnJ6B-kaXROni7A9g8BW/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "200 kB"
            },
            {
              id: "ee-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1RF-UxQ10mUVVbdUA77tGSs66omTsF8P0/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "124 kB"
            },
            {
              id: "ee-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1BUISIYpfqxHiJm6mI1j7Rr1HAP-NyQxT/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "112 kB"
            }
          ]
        }
      ],
      "sem3": [
        {
          id: "Database",
          name: "Database Management System",
          code: "22319",
          papers: [
            {
              id: "db-w18",
              title: "Winter 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1XCbo45AcENAsZevxOmcue5LDdH1GXqrv/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "308 kB"
            },
            {
              id: "db-s19",
              title: "Summer 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1ut8rhLObRoUKpOUMBctMmdC0c38SwOBX/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "376 kB"
            },
            {
              id: "db-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1KJ-5f7ru-qSYRWnGn5fHV5oVJrtf_V23/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "192 kB"
            },
            {
              id: "db-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1HL-TvLLeIphhvxuUYPAH8QSu6Yzyp6F7/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "99 kB"
            },
            {
              id: "db-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1X3T3rRbmKDX6pmgccmOjfO5W7lcS17Nh/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "96 kB"
            },
            {
              id: "db-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1U3OlJljwOXQ8NlRMb4f2PaiOzGxN-BV_/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "105 kB"
            }
          ]
        },
        {
          id: "Data structure",
          name: "Data structure using C",
          code: "22317",
          papers: [
            {
              id: "ds-w18",
              title: "Winter 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1tXfbpgoYsPPhadkmO9--rcTM9yPwu_RL/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "391 kB"
            },
            {
              id: "ds-s19",
              title: "Summer 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1UX_EUmIlguibWr1hUuIcbj321JfAhfEW/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "411 kB"
            },
            {
              id: "ds-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1cbChxrxFiYCjmAw0S-zm-F2tooJJa-zp/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "380 kB"
            },
            {
              id: "ds-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1fzVWebmmonl56yDByge8lFMPbhejTSxC/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "217 kB"
            },
            {
              id: "ds-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1Pe4FoaV7-t5tUO2pJAtdb8TXcLRdjbFv/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "203 kB"
            },
            {
              id: "ds-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1Eithv1f_o7QN_eEmCqQ9cd3KMyakKTJ7/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "146 kB"
            },
            {
              id: "ds-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/13X9zlaK-tWfCoY-HxzlbqLfCF4BzyRZo/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "153 kB"
            }
          ]
        },
        {
          id: "Digital",
          name: "Digital techniques",
          code: "22320",
          papers: [
            {
              id: "dig-w18",
              title: "Winter 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1bXD5fZJQUoXuU71Y3obC2Dq7RIc_0BvF/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "192 kB"
            },
            {
              id: "dig-s19",
              title: "Summer 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/13SlrWCnGBUkLgCDpZBW5oG6BZ3ER2JKa/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "195 kB"
            },
            {
              id: "dig-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1-fjmZLJLvmtIEiY0aQkc97t2O5sBfvNR/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "157 kB"
            },
            {
              id: "dig-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1NlKI89wBFWeVRfDMRn9o8iUFZV53i1U0/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "480 kB"
            },
            {
              id: "dig-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1iKBdJ6IIXersd4xGyRZ9WzJMvzltmCTK/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "110 kB"
            },
            {
              id: "dig-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/15srkl0krih9WlXdwXmxAiJMWXAmrl-Ri/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "108 kB"
            },
            {
              id: "dig-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1IuogStRy4L4gKmZj_rmcwZ7pPoR2XxzH/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "121 kB"
            }
          ]
        },
        {
          id: "Programming (C++)",
          name: "Object Oriented Programming using C++",
          code: "22316",
          papers: [
            {
              id: "oop-w18",
              title: "Winter 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/163c2dXcF_8rJrYaT2ec_Sr8CmpXaX6zq/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "201 kB"
            },
            {
              id: "oop-s19",
              title: "Summer 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/11LbfxBEwSf-8mWG3ZXFRiBhLtfsLdcEb/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "194 kB"
            },
            {
              id: "oop-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/16gFI33UFg0DZkHMlKw6D7n2KwPKX5Y7p/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "210 kB"
            },
            {
              id: "oop-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1pqytcXUYcZneQn7PNW-faDA7sycmptre/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "100 kB"
            },
            {
              id: "oop-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1eRkFuk1llUQE2iW4p8ltUo8RX6o9IXNb/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "97 kB"
            },
            {
              id: "oop-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1-TPhB_IBqJeP9GW7OL1JEJdXDsv0rjUU/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "108 kB"
            },
            {
              id: "oop-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1OvETUi3bKPBUKD7xx2ih9Xr0lD-4hvIN/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "101 kB"
            }
          ]
        },
        {
          id: "Graphics",
          name: "Computer Graphics",
          code: "22318",
          papers: [
            {
              id: "cg-w18",
              title: "Winter 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1FKtfM-oLOYob9gMTz42bpdly9zlFnC0y/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "392 kB"
            },
            {
              id: "cg-s19",
              title: "Summer 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1cG7qmxo0Jav02W20pAa_C-i7zJtyfLwB/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "395 kB"
            },
            {
              id: "cg-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1YlGtrzI_bqOD2B1m0uMzztWCbJgQvLMh/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "199 kB"
            },
            {
              id: "cg-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1UeNbxtQI3l9gnQkaUWKhZ3LjKXaPqGYy/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "388 kB"
            },
            {
              id: "cg-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1X9h6n4jzpzXz9FnrZu5LVKbfblmAf9W6/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "110 kB"
            }
          ]
        }
      ],
      "sem4": [
        {
          id: "Data Communication",
          name: "Data communication and Computer network",
          code: "22414",
          papers: [
            {
              id: "dc-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/18ZcSC9891h_IvcIdMPG7RHc0AHTHBrRY/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "177 kB"
            },
            {
              id: "dc-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1UufafzXX8RLFDQfBgV7nkdgNTAx-frCc/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "94 kB"
            },
            {
              id: "dc-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1jOok67KBb4MAVTCfrGcFNsVU5qLjN8Jr/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "98 kB"
            },
            {
              id: "dc-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1Y_eJqrPvrEzNECYBAxNvJ-NXLGeDhobz/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "103 kB"
            }
          ]
        },
        {
          id: "Java",
          name: "Java Programming",
          code: "22412",
          papers: [
            {
              id: "java-s19",
              title: "Summer 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1JpXVtJko_5SRERako2PFFM_eMXjZF82m/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "181 kB"
            },
            {
              id: "java-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1s_Iw8AUOIczTNWe2l34HudwGdZhKPARt/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "177 kB"
            },
            {
              id: "java-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1mry-ivVZr8jcP9jZjS2-ZZvVdesO7glP/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "94 kB"
            },
            {
              id: "java-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/12C9HDNXnfluuntuMfjUmiMhj-ksBvCA7/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "98 kB"
            },
            {
              id: "java-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1o2LA74qHaYtqyOsafAVgCUXJhz0hogPW/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "103 kB"
            },
            {
              id: "java-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1hSvJy-gEcYXEUibfeqC3-nfa-MM4VbDB/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "109 kB"
            }
          ]
        },
        {
          id: "Microprocessor",
          name: "Microprocessor",
          code: "22415",
          papers: [
            {
              id: "mp-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1dAi6g35-ii33ytLIvXOtHq8CzyUjmt18/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "190 kB"
            },
            {
              id: "mp-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1VuHwY_ijmWGCvQZG1zPe7r8s8ZjXiJyO/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "379 kB"
            },
            {
              id: "mp-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1ozCUbZ_jczlFdnSQiBOQoqvAf-FQe1d6/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "190 kB"
            },
            {
              id: "mp-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/17z6FPsZsTj3_7LqdH8eNqkc_CS5zbmwb/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "114 kB"
            }
          ]
        },
        {
          id: "Software",
          name: "Software Engineering",
          code: "22413",
          papers: [
            {
              id: "se-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/18tKZEsooMlHgabM3hRmKWfPtIrhfz7xl/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "179 kB"
            },
            {
              id: "se-s19",
              title: "Summer 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1EICYYUfoPJyaQnMVsKi-ioZ_HUFBFz6g/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "187 kB"
            },
            {
              id: "se-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1spF2zuNyaBkFLn2sRL8TO-GRTxk9ronN/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "98 kB"
            },
            {
              id: "se-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1OQdVriCpRLHH-KQjm-64AKEtXVRVLPoC/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "99 kB"
            },
            {
              id: "se-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1nJb7wYdEhiWz2GygLbXl8pQb9hv_UnCG/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "97 kB"
            },
            {
              id: "se-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1L-E8ZtRYVXdnE-bHHefPxlyT7DLBNPbp/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "97 kB"
            }
          ]
        }
      ],
      "sem5": [
        {
          id: "Operating System",
          name: "Operating System",
          code: "22516",
          papers: [
            {
              id: "os-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1gLMWXOOLfDE0GTvg-0coBIq2LjjMzT0c/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "202 kB"
            },
            {
              id: "os-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/17IrDJUKX8dZqvLKJ2ZuQ7zpjKHWbfYjR/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "100 kB"
            },
            {
              id: "os-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1fhfRIgSLTfQ8YziIGnjmda3bGCUAxSwB/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "100 kB"
            },
            {
              id: "os-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1NttHvnxx2TuWJUG3m9NLakNPUdA-6hkI/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "109 kB"
            },
            {
              id: "os-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1TfiEqE6fYS4IsGR2G4g1WyowQM-b1XAP/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "100 kB"
            }
          ]
        },
        {
          id: "testing",
          name: "Software testing",
          code: "22518",
          papers: [
            {
              id: "testing-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1Nz6U2xd0JpH1gSd3MwVn74cSQaTdCwuR/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "177 kB"
            },
            {
              id: "testing-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1-mGRFx03nTKNSf75VtKrNMNKem8B49rX/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "97 kB"
            },
            {
              id: "testing-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1RqHxtMAVywRySX6rgYNLkX1vnNGBWDnb/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "96 kB"
            },
            {
              id: "testing-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1S_mJxwA2Z6TzU_-0U9GO9Bg6ph5eIj4z/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "107 kB"
            },
            {
              id: "testing-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1JKvqic2Jyh9ZX_S7QFKfqbYq9UphXlus/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "103 kB"
            }
          ]
        },
        {
          id: "Client Side Scripting",
          name: "Client Side Scripting",
          code: "22519",
          papers: [
            {
              id: "cs-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1MhoWRf-DlJsrMBsj30NikhChwWOv3gJo/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "208 kB"
            },
            {
              id: "cs-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1xrKgklZf9sOOmeib7uF7MsKkbkf6sXTH/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "377 kB"
            },
            {
              id: "cs-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/15sSNxb-P3TQnlGuW6_9O0haw2opvH-Hy/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "387 kB"
            },
            {
              id: "cs-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1b2WtgPUHUDv58UOUpiglcD-gUSXQMUTf/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "125 kB"
            },
            {
              id: "cs-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/11goBYOMLVhawF_g8PK5NnQ1h0u_fyKEH/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "98 kB"
            }
          ]
        },
        {
          id: "Database",
          name: "Advance Database Management",
          code: "22521",
          papers: [
            {
              id: "db-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1Du5JnbjCo0rWSYi_4KoWwWTdDCH8EPx3/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "185 kB"
            },
            {
              id: "db-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1yBwgEEtZUuGVIfEMEmWhXcrCuE_12tgi/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "372 kB"
            },
            {
              id: "db-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1NMCl6rMlmkMcuRgf7LoWoa73nlMADOr0/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "382 kB"
            },
            {
              id: "db-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1MSXUZzx_lX9iN9FwsK3aU71vTmWZs1J_/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "109 kB"
            },
            {
              id: "db-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1kFV5GPDPMSNvwCA7407ccNsYZWJt2CCX/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "98 kB"
            }
          ]
        },
        {
          id: "Computer networking",
          name: "Advance Computer networking",
          code: "22520",
          papers: [
            {
              id: "cn-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1bqSZ7jyUbR5MD6O5k49dgaODxDjOKXG5/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "187 kB"
            },
            {
              id: "cn-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1xTdhKlwF5T1oPJFUCBtjf9Rw2nMjcyr8/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "405 kB"
            },
            {
              id: "cn-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1-DeesJzpRdjWIuQvFybsO0CXyPkpaeFc/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "378 kB"
            },
            {
              id: "cn-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1rw9OpOOvFEH9mRaeTqpOEIrnfNVxbs0J/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "111 kB"
            },
            {
              id: "cn-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1PyncRB4E-BB620pQeboNt4knWUCdPJHB/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "112 kB"
            }
          ]
        }
      ],
      "sem6": [
        {
          id: "Python",
          name: "Programming with python",
          code: "22616",
          papers: [
            {
              id: "py-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/13xeZ-Q3E-LPCnlji5afEA8phq3Jexo8A/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "99 kB"
            },
            {
              id: "py-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1CUlplV1hTT3lTCudB9AYHCS2Vm1I1n3y/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "95 kB"
            },
            {
              id: "py-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1Os4LbPOj2zm-yJckKzfhH3YnuQPGNkHY/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "100 kB"
            },
            {
              id: "py-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1wKCViT9j9jHYH2sPeF7HNH2ZnsEDkkRk/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "106 kB"
            }
          ]
        },
        {
          id: "Application Development",
          name: "Mobile Application devlopment",
          code: "22617",
          papers: [
            {
              id: "app-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1O3FML1g8PjaMkEjB2kw9fGdYUrBBZbkE/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "98 kB"
            },
            {
              id: "app-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/16AIMzeqEmwxeBTfODKkX4UkP6n4vnDSP/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "100 kB"
            },
            {
              id: "app-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1DLetpKzciL19gvt6X6hORmWSJUF21dHz/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "111 kB"
            },
            {
              id: "app-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1z8fes-cs1No3rl8KySJ_59wkGkXOCJam/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "98 kB"
            }
          ]
        },
        {
          id: "web development using Php",
          name: "Web Application devlopment with php",
          code: "22619",
          papers: [
            {
              id: "web-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1oO-uirdvdLF_K5JzpZa7QNXA-2zZBQs7/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "196 kB"
            },
            {
              id: "web-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1mufX0tN63bA4Oq6czPIUWC9uYNa5-AYE/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "380 kB"
            },
            {
              id: "web-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1flTA7Tsbr4O07HmgR-pZBQ8oyjN1mv2K/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "108 kB"
            },
            {
              id: "web-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1-FylUklKiRXrHOAYA7IB7SnUjQVui6ba/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "101 kB"
            }
          ]
        },
        {
          id: "Network Security",
          name: "Network and information security",
          code: "22620",
          papers: [
            {
              id: "sec-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1dqe0DvnZNusBr7l296N_iOj68akt4OEB/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "189 kB"
            },
            {
              id: "sec-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1VITUpZ16Y9W3xnXXPvlwOdVx39LQYld0/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "392 kB"
            },
            {
              id: "sec-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1Q01mHqA_wPJz08S95bjoBz60fdAv_VVH/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "133 kB"
            },
            {
              id: "sec-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/18BGJgWpmE4V_FSfCPhcLrFhUBhYGydaJ/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "104 kB"
            }
          ]
        },
        {
          id: "Data warehousing",
          name: "Data warehousing and mining techniques",
          code: "22621",
          papers: [
            {
              id: "data-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/12B-c_NMkFEWGu35G3UPMYnivnbFpwguE/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "79 kB"
            },
            {
              id: "data-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/15l8VuN2MOq1Ugp3_0eKXT7EoH4oGIHrI/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "376 kB"
            },
            {
              id: "data-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1DicIYksaMrV_p5vLONmnZ9e7_tjCGEoW/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "109 kB"
            },
            {
              id: "data-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1MnC_IZB6nD7oRpIXJnlN3BN9oXwL7N7C/view?usp=drive_link",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "109 kB"
            }
          ]
        }
      ]
    }
  },
  {
    id: "electronics",
    name: "Electronics and telecommunication Engineering",
    subjects: {
      "sem1": [
        {
          id: "eng",
          name: "English",
          code: "22101",
          papers: [
            {
              id: "eng-s18",
              title: "Summer 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/14YGvLqQx1YG3iWaXVn1Ty9ebA6s1nlEF/view?usp=drive_link",
              downloadCount: 156,
              lastDownloaded: "2024-01-12",
              fileSize: "386 kB"
            },
            {
              id: "eng-w18",
              title: "Winter 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1_rWb75tG3nMM9N-VXb9YtCwoKIDbUvLE/view?usp=drive_link",
              downloadCount: 146,
              lastDownloaded: "2024-01-12",
              fileSize: "286 kB"
            },
            {
              id: "eng-s19",
              title: "Summer 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1P-zdpooyT_LZKpfqDAs7SgrBHmLAHR9r/view?usp=drive_link",
              downloadCount: 156,
              lastDownloaded: "2024-01-12",
              fileSize: "387 kB"
            },
            {
              id: "eng-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1zIrndViUvkT0ownwQlLYTePisw3e7V2v/view?usp=drive_link",
              downloadCount: 156,
              lastDownloaded: "2024-01-12",
              fileSize: "190 kB"
            },
            {
              id: "eng-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1CqyobE1BlZN29An5dO4d3GYv3O6TM1EK/view?usp=drive_link",
              downloadCount: 234,
              lastDownloaded: "2024-01-10",
              fileSize: "115 kB"
            },
            {
              id: "eng-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1mTT0b198ShgBDUbOkjGhYlXf3TOrJ2k8/view?usp=drive_link",
              downloadCount: 567,
              lastDownloaded: "2024-01-05",
              fileSize: "105 kB"
            }
          ]
        },
        {
          id: "math",
          name: "Basic Mathematics",
          code: "22102",
          papers: [
            {
              id: "math-s18",
              title: "Summer 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1GQy73Z_jNRoM2iGV5gJDGnxk8KWQDC83/view?usp=drive_link",
              downloadCount: 189,
              lastDownloaded: "2024-01-11",
              fileSize: "90 kB"
            },
            {
              id: "math-w18",
              title: "Winter 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/118dSXizC0wU_JLs01YB_maV7N3lNwTF0/view?usp=drive_link",
              downloadCount: 189,
              lastDownloaded: "2024-01-11",
              fileSize: "342 kB"
            },
            {
              id: "math-s19",
              title: "Summer 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1Dq8l8CEfF_jTq9dP0feNWGXJJ3iiHPgS/view?usp=drive_link",
              downloadCount: 189,
              lastDownloaded: "2024-01-11",
              fileSize: "399 kB"
            },
            {
              id: "math-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1qO2CQdMHLERr1dzMvqJ-b0ZTQbTT7Mcw/view?usp=drive_link",
              downloadCount: 189,
              lastDownloaded: "2024-01-11",
              fileSize: "147 kB"
            },
            {
              id: "math-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/12OOM_djYEkckwUKwSuKKXIHLe_bPUTMq/view?usp=drive_link",
              downloadCount: 189,
              lastDownloaded: "2024-01-11",
              fileSize: "236 kB"
            },
            {
              id: "math-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1slICeU_UJGHpRXJdYHAuHJKhzxZ52Hvk/view?usp=drive_link",
              downloadCount: 245,
              lastDownloaded: "2024-01-09",
              fileSize: "123 kB"
            },
            {
              id: "math-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/10fCWS0Z4L7p6OG4boXSQKlmzwswEojXf/view?usp=drive_link",
              downloadCount: 245,
              lastDownloaded: "2024-01-09",
              fileSize: "123 kB"
            }
          ]
        }
      ],
      "sem2": [
        {
          id: "Applied maths",
          name: "Applied Mathematics",
          code: "22210",
          papers: [
            {
              id: "eng-s18",
              title: "Summer 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1tzjjcLL9T-dFpsTkFR6bnRW8piQbLGG7/view?usp=drive_link",
              downloadCount: 146,
              lastDownloaded: "2024-01-12",
              fileSize: "262 kB"
            },
            {
              id: "math-w18",
              title: "Winter 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1gI4-uvaxA2NVGROWHiiGgKZJXqDzJDty/view?usp=drive_link",
              downloadCount: 146,
              lastDownloaded: "2024-01-12",
              fileSize: "246 kB"
            },
            {
              id: "math-s19",
              title: "Summer 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1-TrQNRP1qmLl1rbdAmAtdaE0BdPF3GHv/view?usp=drive_link",
              downloadCount: 146,
              lastDownloaded: "2024-01-12",
              fileSize: "228 kB"
            },
            {
              id: "math-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1GGoeK0HNxr3y838xKDW1uLryYnA_omfE/view?usp=drive_link",
              downloadCount: 146,
              lastDownloaded: "2024-01-12",
              fileSize: "237 kB"
            },
            {
              id: "math-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1y3asnO9X9at8tmyDVNzIgtfBrVjjL5ni/view?usp=drive_link",
              downloadCount: 146,
              lastDownloaded: "2024-01-12",
              fileSize: "153 kB"
            },
            {
              id: "math-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1yv3vhYfmfjz1CURDpq5WQhZtM6X8wFEC/view?usp=drive_link",
              downloadCount: 146,
              lastDownloaded: "2024-01-12",
              fileSize: "136 kB"
            },
            {
              id: "math-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1L--na5oNzI3YVP5LIRlzGtricwnUG-Fk/view?usp=drive_link",
              downloadCount: 203,
              lastDownloaded: "2024-01-10",
              fileSize: "136 kB"
            },
            {
              id: "math-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1W4B68ojblpIInKoAqzhhXZk2xbuPuY9q/view?usp=drive_link",
              downloadCount: 203,
              lastDownloaded: "2024-01-10",
              fileSize: "141 kB"
            }
          ]
        },
        {
          id: "Basic Electronics",
          name: "Basic Electronics",
          code: "22216",
          papers: [
            {
              id: "elec-s18",
              title: "Summer 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1f7qT_IJoAVEDkTy6U070SvVnY6Np6slO/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "390 kB"
            },
            {
              id: "elec-w18",
              title: "Winter 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1uzs9VAFokbNQLuAuHqviVAuF0GHrA0up/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "411 kB"
            },
            {
              id: "elec-s19",
              title: "Summer 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1_5lHSj4yg716BcQ74QQTWaSPMlqAefLE/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "195 kB"
            },
            {
              id: "elec-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1R7NucNWMOOfQKGnkS32Yej99bPWno4ve/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "216 kB"
            },
            {
              id: "elec-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/18c3DuW-5slR7iIsxmoQY61pIobiuivmW/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "321 kB"
            },
            {
              id: "elec-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1axh0_YALLSZcDIavlpdb_2AbLkH0PLA-/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "203 kB"
            },
            {
              id: "elec-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1hP6CaxloOL74qpw8sCiVy80jE329tRSV/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "167 kB"
            },
            {
              id: "elec-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1auqcC5buJSCAcrgU5kPEYYgHjMi7jn8Z/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "142 kB"
            }
          ]
        },
        {
          id: "c-programming",
          name: "C programming",
          code: "22218",
          papers: [
            {
              id: "c-prog-s18",
              title: "Summer 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1-uuYhRr-MuandJzpHwYmd8I_-Oo1UkvL/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "356 kB"
            },
            {
              id: "c-prog-w18",
              title: "Winter 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/15AXfc5WtbMR9ect27Bd2bWCVlGT1M99e/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "318 kB"
            },
            {
              id: "c-prog-s19",
              title: "Summer 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1RrcdPsImpeCC7EfXCosvjrbz3F32Dnef/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "397 kB"
            },
            {
              id: "c-prog-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/14QgwnYpOrT3FYGV4sDNvNY-OBM5zDOoj/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "366 kB"
            },
            {
              id: "c-prog-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1SXzETrtllogdiGU8vf4I3Tmol-1yB3na/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "94 kB"
            },
            {
              id: "c-prog-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1avdZ6FchdsAO-KMJU4QJA9p9sah4_0eo/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "183 kB"
            },
            {
              id: "c-prog-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1rxMA7wA5nzWeaSjgISGh0295n8IBVQ35/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "123 kB"
            },
            {
              id: "c-prog-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/12ii3EblpJhoh4kFa0rWyAIeacjfhk2Tu/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "105 kB"
            }
          ]
        },
        {
          id: "Electrical",
          name: "Elements of Electrical Engineering",
          code: "22215",
          papers: [
            {
              id: "ee-ele-s18",
              title: "Summer 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1iQAL1jjyOKpHkb6xyrSXPMC0bEWq_PZ7/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "176 kB"
            },
            {
              id: "ee-ele-w18",
              title: "Winter 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/12mb1EXaNIfjzR_XdGdB3gbwIVqmUjfWt/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "186 kB"
            },
            {
              id: "ee-ele-s19",
              title: "Summer 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1vHntSaUAdyqamYW3eA3G0RHhCQs4rz7U/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "211 kB"
            },
            {
              id: "ee-ele-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1uz6Ej6W7fdQsyrqBRDBHrThwIT3VyFI7/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "198 kB"
            },
            {
              id: "ee-ele-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1Vjio_iaXHsqPTrg5BLxs0mX5MIzxEgD3/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "99 kB"
            },
            {
              id: "ee-ele-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/10TRx-cH9Fy-2eO0LQtiQaWShnwBR30oz/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "200 kB"
            },
            {
              id: "ee-ele-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/13m2-_vYpzvPByJ02VprPx1yq73yci6ag/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "124 kB"
            },
            {
              id: "ee-ele-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1lwUoadWuuAoNmAQXQEdSPd6t9dzVKxOc/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "112 kB"
            }
          ]
        },
        {
          id: "Electronic materials",
          name: "Electronic Engineering Materials",
          code: "22217",
          papers: [
            {
              id: "em-ele-s18",
              title: "Summer 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1bHgmeQQv3S6-eDyJP90divlBBAIxovNd/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "390 kB"
            },
            {
              id: "em-ele-w18",
              title: "Winter 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1bplMqB7tfax1fHHgGRFZvy24f4JCEWHI/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "370 kB"
            },
            {
              id: "em-ele-s19",
              title: "Summer 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1R_FKYXmSbzVkKJg0X9gh2REogYzwjgLh/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "373 kB"
            },
            {
              id: "em-ele-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1YtMxJGvtQt3F3-ULVojsZCGkxSjAl0Sb/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "367 kB"
            },
            {
              id: "em-ele-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1p28IuboRn7qG-Vg1ReBFbX9Gid6nZHqn/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "98 kB"
            },
            {
              id: "em-ele-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1Y5ffIQ_L2kudiW16nCMB-6UvfGMMJ2pS/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "108 kB"
            },
            {
              id: "em-ele-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1krBcUcRi2KEFjpmrImt31ftixZPiFd4P/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "118 kB"
            },
            {
              id: "em-ele-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1-DJV70iDJCtKOLSSAWzNwEAz-Op7MQy4/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "104 kB"
            }
          ]
        }
      ],
      "sem3": [
        {
          id: "Analog",
          name: "Analog Electronics",
          code: "22329",
          papers: [
            {
              id: "an-ana-w18",
              title: "Winter 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1VoqubECx_Qjqpt7KevBgAXqk8g1sO6_i/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "192 kB"
            },
            {
              id: "an-ana-s19",
              title: "Summer 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1PTfYVM-KLf2gxBl0abMPH2Z63fUHbtIA/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "203 kB"
            },
            {
              id: "an-ana-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1qajmoPjktLVX3M7ZvqyR6GOvUbHIkwW4/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "175 kB"
            },
            {
              id: "an-ana-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1vqVVB35VZy5t3sh5wr0CO6nKFXNFW8eL/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "232 kB"
            },
            {
              id: "an-ana-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1VHrcAudwbwE8jNNHdJbGAif5g2EFLKsn/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "216 kB"
            },
            {
              id: "an-ana-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1Vi4G2lp4gx_7aYcw_o61OHBLYSoe4E0T/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "237 kB"
            },
            {
              id: "an-ana-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1h4bN6Yuk8atBcUzI-AxMuIWQ3e2cvH_b/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "267 kB"
            }
          ]
        },
        {
          id: "Digital",
          name: "Digital Techniques",
          code: "22320",
          papers: [
            {
              id: "dig-w18",
              title: "Winter 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1D-umA2acMiro8NZx31FBc3yUhssOOtAH/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "192 kB"
            },
            {
              id: "dig-s19",
              title: "Summer 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1-u7t5d-86y0g86v-34L461x370062jO/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "195 kB"
            },
            {
              id: "dig-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1i9MRDSpTAGmuUQ-D6bFHio_umFmD8Y8H/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "157 kB"
            },
            {
              id: "dig-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1LwZQa3QYFo3g9P9zfkWzRIiMHLpUKt2N/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "480 kB"
            },
            {
              id: "dig-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1SFC5YnlC5o2hjH5V99TSuUcRBnkBy1LK/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "110 kB"
            },
            {
              id: "dig-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1g_N9ochJ-BTstG3Y6Y_12oWpk-Wk85Bv/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "108 kB"
            },
            {
              id: "dig-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1iIZ46RewcAMGjV2IqdTlJKvyexrNBAcL/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "121 kB"
            }
          ]
        },
        {
          id: "Electric circuits and networks",
          name: "Electric circuits and networks",
          code: "22330",
          papers: [
            {
              id: "ecn-w18",
              title: "Winter 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1n7cXzCJwxRbqaAK0hdYbCaRwkbLRqPmh/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "413 kB"
            },
            {
              id: "ecn-s19",
              title: "Summer 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1A1_r1QBqL96V8QgD6LFy1oiowy8z9NcP/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "257 kB"
            },
            {
              id: "ecn-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/11G4wQNoQunAnMCpbdy0G89wnONFDN7rv/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "213 kB"
            },
            {
              id: "ecn-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1j1q-YCeOcvx_n_BgX7PvTncjUufI3vtw/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "131 kB"
            },
            {
              id: "ecn-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1XwuUAHczrQIxa7-C-glbAmm_9V0Xkwz3/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "174 kB"
            },
            {
              id: "ecn-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1COnACy--pypyem752m97E3YGO78AyoAY/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "159 kB"
            },
            {
              id: "ecn-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1yTb_1X9MegqrKKOgVlA2Qx75-LH4d6ph/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "142 kB"
            }
          ]
        },
        {
          id: "Electronics measurements and instrumentation",
          name: "Electronics measurements and instrumentation",
          code: "22333",
          papers: [
            {
              id: "emii-w18",
              title: "Winter 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1NHuVrwzu81JvrlNKK6w97CkbCwES7-1L/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "388 kB"
            },
            {
              id: "emii-s19",
              title: "Summer 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1w8LffvuNDyRCfHPgKas6izxUvNW5WZDT/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "390 kB"
            },
            {
              id: "emii-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1EmRoG6ngIooMiKegN_MTnqjyBVPQ20ZF/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "437 kB"
            },
            {
              id: "emii-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1jiPJiBKUynK9w03k4dCc2DKLKU6zQp4t/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "194 kB"
            },
            {
              id: "emii-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1taSiNDLgGUCvSvMK6lDQM3pBpqeiOUOH/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "198 kB"
            },
            {
              id: "emii-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/10T-rb0BOHU44LV8AX8TVZcngETDTirqH/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "120 kB"
            },
            {
              id: "emii-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1qFVZlCt-ugUyl85lY7AlEYRG_TE6ry5L/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "226 kB"
            }
          ]
        },
        {
          id: "Principles of Electronic Communication",
          name: "Principles of Electronic Communication",
          code: "22334",
          papers: [
            {
              id: "pec-w18",
              title: "Winter 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1uVK6jVy-NRhnh4NInhLrJNeBOriaVXD8/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "583 kB"
            },
            {
              id: "pec-s19",
              title: "Summer 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1AVkShzKxX1DHgdNCMY93yR7JCjBTaluQ/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "394 kB"
            },
            {
              id: "pec-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1l95MWgC5HyLGzz5X0-3TBsurdxiA_950/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "202 kB"
            },
            {
              id: "pec-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1NQ0gQTG6V8V-ippBC4lCuyjJGkP0o5EC/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "198 kB"
            },
            {
              id: "pec-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1X0p_QXDJMPWyzEvp-y4Q4RT_lSfAFeOM/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "203 kB"
            },
            {
              id: "pec-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1Cl_6dYscH_l6DIuJDOVFJMhgc8ldHxyj/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "116 kB"
            },
            {
              id: "pec-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/161n__huoO_LRMZHc6T92e4EPggw3gPGf/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "194 kB"
            }
          ]
        }
      ],
      "sem4": [
        {
          id: "Power Electronics",
          name: "Basic Power Electronics",
          code: "22427",
          papers: [
            {
              id: "pe-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1V26u4JyvJFzJ7NGXtn-ZwKVgB59VeAvq/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "183 kB"
            },
            {
              id: "pe-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/11vb09m2gk4Url-brp0Thl2gfjKlH6IxJ/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "393 kB"
            },
            {
              id: "pe-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/10VEptFxvw9HkreDDHlJtC0c04VWN53C3/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "199 kB"
            },
            {
              id: "pe-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1wVMhHEfMf2Fw0Ng4_sv7sqP2TZ4zr7ce/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "118 kB"
            },
            {
              id: "pe-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1WXPm5F7ZTJlLeQ-c6pEuGQ21vhWKDOPM/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "121 kB"
            }
          ]
        },
        {
          id: "Consumer Electronics",
          name: "Consumer Electronics",
          code: "22425",
          papers: [
            {
              id: "ce-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1nmudIL4KDPY4LYjl1FSD6D461N1ahrBa/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "188 kB"
            },
            {
              id: "ce-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/19FtwRXxGC_p9zEH6Stda7z6I78guutve/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "119 kB"
            },
            {
              id: "ce-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1Yspp4GP0apV4LJCJsQN8VPNNdO8umo_E/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "172 kB"
            },
            {
              id: "ce-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1UtxDYt421_gZMEVzH3sKaeMibGLEF4UT/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "101 kB"
            },
            {
              id: "ce-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1cepooV8OPb5ddK5JjyiU1rCSB_yfDK8P/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "114 kB"
            }
          ]
        },
        {
          id: "Communication",
          name: "Digital Communication System",
          code: "22428",
          papers: [
            {
              id: "me-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1AFeDlJIteZ9vFNJcvSL3SX5awxakkOwD/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "385 kB"
            },
            {
              id: "me-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/105XVuBt_eFmRt1vsn1fjxwUc8eTBBEbx/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "425 kB"
            },
            {
              id: "me-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/12n9SWtc_nx783Hf-7pz0JCB3GBOQz3x0/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "211 kB"
            },
            {
              id: "me-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1NABvo193b_ZfahkpeSfchBs4zxzik9mi/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "125 kB"
            },
            {
              id: "me-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1L95nDxsP617y_HvQZM8mdkWaoRhKG6QA/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "120 kB"
            }
          ]
        },
        {
          id: "Integrated Circuits",
          name: "Linear Integrated Circuits",
          code: "22423",
          papers: [
            {
              id: "ic-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/15UUZOgnx83SwIuMaWLvp-s2mRfICYGrt/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "188 kB"
            },
            {
              id: "ic-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1ekH3rwBuvCsYCVAp_ZGSNU6GngpA1NFh/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "201 kB"
            },
            {
              id: "ic-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1ZVZ7wrXKgAFOs6nJwVb_h6Qp5DtPF_Z3/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "123 kB"
            },
            {
              id: "ic-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1NggL7wYJlgartlq8VIc1GwO9HVdv61Qu/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "111 kB"
            },
            {
              id: "ic-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1qmx8grF1-ZzNMH40wHynyOAAIdDlNpMi/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "162 kB"
            }
          ]
        },
        {
          id: "MicroController",
          name: "Microcontroller and Applications",
          code: "22426",
          papers: [
            {
              id: "mc-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1ikPwhWM3y_dOL2OpwuZitFPpyOM05bWA/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "140 kB"
            },
            {
              id: "mc-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1-P1ZNweXANu7URzp4I9O1QqZX7zccuiu/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "107 kB"
            },
            {
              id: "mc-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/19Ze-J0fZeHZFv-kMgXaoP6rdqW0INXzA/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "199 kB"
            },
            {
              id: "mc-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1g4C73_O4LexpMASSTe0M5UMPJu1SVFCu/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "115 kB"
            },
            {
              id: "mc-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1FE04hQChF5lkbTZQtc7V5-i_oRkHU5qY/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "99 kB"
            }
          ]
        }
      ],
      "sem5": [
        {
          id: "Control System",
          name: "Control System and PLC",
          code: "22531",
          papers: [
            {
              id: "ca-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1lWTrPDhp2K6l-C46v7u5DMPi49n8Vh43/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "177 kB"
            },
            {
              id: "ca-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/18alwdsfmcQjnVvT32F2WwVLMYNDKtoA9/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "118 kB"
            },
            {
              id: "ca-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1cSlAwSxOqTLenfA5MXGD19GwLsqAhyw8/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "168 kB"
            },
            {
              id: "ca-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1AA4nHk8eguovgb2cxJVAEuT0WfLEvQr9/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "214 kB"
            },
            {
              id: "ca-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1IwiEjei-MGQmSJUCLQRhHSyMEt8bQQcL/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "128 kB"
            }
          ]
        },
        {
          id: "Embedded",
          name: "Embedded System",
          code: "22532",
          papers: [
            {
              id: "esy-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1egW2mhhoNBgZKZe1pkBYpEeYgc5onyQv/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "176 kB"
            },
            {
              id: "esy-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1VsxTMtxrfAtsLwJ5GmR0Jgkcq7SncQeM/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "101 kB"
            },
            {
              id: "esy-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1wsV-U3iW3Grv9bO4N7Lgxkw2U0pRN-m4/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "106 kB"
            },
            {
              id: "esy-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1wBw5fwB4bMwwFBRp6HIsUMBafzcbP-tD/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "104 kB"
            },
            {
              id: "esy-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1vBabAa7ggteyQbIvkhRKLiwKAG0CWSD4/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "106 kB"
            }
          ]
        },
        {
          id: "Wireless Communication",
          name: "Mobile And Wireless communication",
          code: "22533",
          papers: [
            {
              id: "wc-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1Rrt3hNizWBz6N2Iin0oVoklPWZ2J9ffy/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "218 kB"
            },
            {
              id: "wc-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1SXqzK14vXYm53BVD_wv1jenYuPIMzNK3/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "99 kB"
            },
            {
              id: "wc-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1gqJrGfQR873MI7SmcWJRe-hWqj_-Zz4k/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "118 kB"
            },
            {
              id: "wc-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1rT4e_aap9FRia-iFHLWiD_YUUfhfpz-c/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "98 kB"
            },
            {
              id: "wc-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/11t2b6HRenZHzsKXCdVYEHFIXTdyGxoSg/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "116 kB"
            }
          ]
        },
        {
          id: "Automation",
          name: "Industrial Automation",
          code: "22534",
          papers: [
            {
              id: "auto-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1V0UBzIJu2rWbPqeMQztd2QRKXsMWm0Jn/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "182 kB"
            },
            {
              id: "auto-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1B785Et0PWUHGYioX6SNyButGSikdxdng/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "190 kB"
            },
            {
              id: "auto-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1cijnUSh1x8iH0MPt9ocuIiaP679GlZ3F/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "381 kB"
            },
            {
              id: "auto-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1eQw60vLuha5nJlLw0DDwHfjMwDCDR8e3/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "120 kB"
            },
            {
              id: "auto-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/12Ibl9RwqnRrhqjHDJXQOGBS883NkRF9g/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "110 kB"
            }
          ]
        },
        {
          id: "Microwave and radar",
          name: "Microwave and Radar",
          code: "22535",
          papers: [
            {
              id: "mw-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1qgEM_rEYfVnQOI2H540_04hz-PrVAh-z/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "188 kB"
            },
            {
              id: "mw-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1FPz3XDgtvFWuuo53iiKVFahsMn2dUFcK/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "191 kB"
            },
            {
              id: "mw-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1IfEamfmuZGYBHl6OgIzQLDPlMsWRsMtb/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "371 kB"
            },
            {
              id: "mw-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1ESBJwYGhOnD--w5dHdt1_4J79XdoQmlo/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "110 kB"
            },
            {
              id: "mw-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1ReImh9ShM--At1EdiPBPKD2rWhBE9H4a/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "111 kB"
            }
          ]
        }
      ],
      "sem6": [
        {
          id: "Computer Networking and Data Communication",
          name: "Computer Networking and Data Communication",
          code: "22634",
          papers: [
            {
              id: "cn-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1nDNfvZ3VO_j8ZWIDrPxnMyUNcf6nU1kH/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "103 kB"
            },
            {
              id: "cn-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1p1pLYfe2O99L84AnoQZt5UY2ENnE_ZCb/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "101 kB"
            },
            {
              id: "cn-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1_5NKvwit4d9K412groNGw4rGqRwbZqN4/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "101 kB"
            }
          ]
        },
        {
          id: "Mechatroonics",
          name: "Mechatronics",
          code: "22643",
          papers: [
            {
              id: "mec-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1oF8YG09oB_4USsdQlT0CtvjO4BCLyuT2/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "94 kB"
            },
            {
              id: "mec-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/193MW9FiIADdAdii0LvDovhVAeBYKxqVN/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "389 kB"
            },
            {
              id: "mec-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1ZGgFeIfGNzhPc9v7s6rHG2UVy2-dGcrO/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "106 kB"
            },
            {
              id: "mec-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1VEN0mwbPm1yHmD6bD4DfNthFx0iYV_Ib/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "97 kB"
            }
          ]
        },
        {
          id: "Satelite Communication",
          name: "Optical Network and Satelite Communication",
          code: "22647",
          papers: [
            {
              id: "sc-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1f_DdqDH33jRiTLc-aUewelzUix_vGTig/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "95 kB"
            },
            {
              id: "sc-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1QR4IjJ84E7xTXHH47miJlSOlkFYyERA6/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "398 kB"
            },
            {
              id: "sc-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1X4M5BhQsQ8BFiQNNcBrQopJVE7i61Kck/view?usp=drive_link",
              downloadCount: 100,
              lastDownloaded: "2024-01-13",
              fileSize: "123 kB"
            }
          ]
        }
      ]
    }
  },
  {
    id: "Mechanical",
    name: "Mechanical Engineering",
    subjects: {
      "sem1": [
        {
          id: "eng",
          name: "English",
          code: "22101",
          papers: [
            {
              id: "eng-s18",
              title: "Summer 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/14YGvLqQx1YG3iWaXVn1Ty9ebA6s1nlEF/view?usp=drive_link",
              downloadCount: 156,
              lastDownloaded: "2024-01-12",
              fileSize: "386 kB"
            },
            {
              id: "eng-w18",
              title: "Winter 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1_rWb75tG3nMM9N-VXb9YtCwoKIDbUvLE/view?usp=drive_link",
              downloadCount: 146,
              lastDownloaded: "2024-01-12",
              fileSize: "286 kB"
            },
            {
              id: "eng-s19",
              title: "Summer 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1P-zdpooyT_LZKpfqDAs7SgrBHmLAHR9r/view?usp=drive_link",
              downloadCount: 156,
              lastDownloaded: "2024-01-12",
              fileSize: "387 kB"
            },
            {
              id: "eng-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1zIrndViUvkT0ownwQlLYTePisw3e7V2v/view?usp=drive_link",
              downloadCount: 156,
              lastDownloaded: "2024-01-12",
              fileSize: "190 kB"
            },
            {
              id: "eng-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1CqyobE1BlZN29An5dO4d3GYv3O6TM1EK/view?usp=drive_link",
              downloadCount: 234,
              lastDownloaded: "2024-01-10",
              fileSize: "115 kB"
            },
            {
              id: "eng-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1mTT0b198ShgBDUbOkjGhYlXf3TOrJ2k8/view?usp=drive_link",
              downloadCount: 567,
              lastDownloaded: "2024-01-05",
              fileSize: "105 kB"
            }
          ]
        },
        {
          id: "math",
          name: "Basic Mathematics",
          code: "22102",
          papers: [
            {
              id: "math-s18",
              title: "Summer 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1GQy73Z_jNRoM2iGV5gJDGnxk8KWQDC83/view?usp=drive_link",
              downloadCount: 189,
              lastDownloaded: "2024-01-11",
              fileSize: "90 kB"
            },
            {
              id: "math-w18",
              title: "Winter 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/118dSXizC0wU_JLs01YB_maV7N3lNwTF0/view?usp=drive_link",
              downloadCount: 189,
              lastDownloaded: "2024-01-11",
              fileSize: "342 kB"
            },
            {
              id: "math-s19",
              title: "Summer 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1Dq8l8CEfF_jTq9dP0feNWGXJJ3iiHPgS/view?usp=drive_link",
              downloadCount: 189,
              lastDownloaded: "2024-01-11",
              fileSize: "399 kB"
            },
            {
              id: "math-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1qO2CQdMHLERr1dzMvqJ-b0ZTQbTT7Mcw/view?usp=drive_link",
              downloadCount: 189,
              lastDownloaded: "2024-01-11",
              fileSize: "147 kB"
            },
            {
              id: "math-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/12OOM_djYEkckwUKwSuKKXIHLe_bPUTMq/view?usp=drive_link",
              downloadCount: 189,
              lastDownloaded: "2024-01-11",
              fileSize: "236 kB"
            },
            {
              id: "math-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1slICeU_UJGHpRXJdYHAuHJKhzxZ52Hvk/view?usp=drive_link",
              downloadCount: 245,
              lastDownloaded: "2024-01-09",
              fileSize: "123 kB"
            },
            {
              id: "math-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/10fCWS0Z4L7p6OG4boXSQKlmzwswEojXf/view?usp=drive_link",
              downloadCount: 245,
              lastDownloaded: "2024-01-09",
              fileSize: "123 kB"
            }
          ]
        }
      ],
      "sem2": [
        {
          id: "Mechanics",
          name: "Applied Mechanics",
          code: "22203",
          papers: [
            {
              id: "mech-s18",
              title: "Summer 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1v-85n7RS7tFl0BgnoHLQoZCDP9htZvrA/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "232 kB"
            },
            {
              id: "mech-w18",
              title: "Winter 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1ltJDgwMgJDa_uICbDTo2_P7rd3ccvbAX/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "268 kB"
            },
            {
              id: "mech-s19",
              title: "Summer 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1HoWYkularMd0mKt_eeOQir5doLZ92uYB/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "253 kB"
            },
            {
              id: "mech-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/13PE63B53MMnVM3q2DkAp9HA9K-cSrAF_/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "228 kB"
            },
            {
              id: "mech-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1-f7IJe8eId5o6lGPKMDHK3o_gjh-vy-n/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "242 kB"
            },
            {
              id: "mech-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1tRBbVZXXM5-zTv6yUtr9AXIYtJujOgp_/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "156 kB"
            },
            {
              id: "mech-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1u7FuVKU5x3oSGjP3Nsgswv0Km2oeJZEV/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "150 kB"
            },
            {
              id: "mech-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1R88OdP-rWeyIrQHpjBwBqlVVgwkraWMs/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "162 kB"
            }
          ]
        },
        {
          id: "Applied Mathematics",
          name: "Applied Mathematics",
          code: "22206",
          papers: [
            {
              id: "math-s18",
              title: "Summer 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1yqreUgYC4WDqkmfNRO_Tf_W9UXG38abb/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "396 kB"
            },
            {
              id: "math-w18",
              title: "Winter 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1FxBPcWToVljFkZqdeK-cLfsmeUv8jBoD/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "398 kB"
            },
            {
              id: "math-s19",
              title: "Summer 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1_-skDuElaaweEcm3BeJSiT55B1g_TR6P/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "223 kB"
            },
            {
              id: "math-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1o_DvaumyD1pQ-BasCJsHqFmCbPYSe7cb/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "214 kB"
            },
            {
              id: "math-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1RrrKFUJKPhoOINb5GZSHrVuVeHdbdGQJ/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "149 kB"
            },
            {
              id: "math-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1Y-93wHAt4JdgzV5VyoUQ8Q3Iu7clWyVp/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "136 kB"
            },
            {
              id: "math-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1nZDWmpaB4Vt9h_6kOVCqEPt-Oq_D9JGP/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "172 kB"
            },
            {
              id: "math-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1COqADldvgoTX2BRo8RrZowSAxAry4iIr/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "128 kB"
            }
          ]
        },
        {
          id: "Drawing",
          name: "Engineering Drawing",
          code: "22207",
          papers: [
            {
              id: "draw-s18",
              title: "Summer 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1FxcXGjHy8OGfBBy8UGBwW1l8g_81gUgx/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "518 kB"
            },
            {
              id: "draw-w18",
              title: "Winter 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1jLXFthzS9dF8ljzreoszdFvFdRf9js4c/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "520 kB"
            },
            {
              id: "draw-s19",
              title: "Summer 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1gNaLE53kSICSBUzcikbbug4atFbwBRh4/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "611 kB"
            },
            {
              id: "draw-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/15VJcJ9Yt-76DowEJrB3f6pAc-jJH7Y3d/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "762 kB"
            },
            {
              id: "draw-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1Y-KaJTs2ManmvjPUwaII3L46uq5ptwup/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "216 kB"
            },
            {
              id: "draw-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1TKhNXkfu8Bg3_ZdHTF5phhHv_f0-9pXj/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "563 kB"
            },
            {
              id: "draw-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1LBZJgPG0IfZ16bYPB27SeUPfFasnYFRi/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "436 kB"
            },
            {
              id: "draw-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1SXDBGfm1RAJz3sWlKRnT2Y2ZKUKmgtDB/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "468 kB"
            }
          ]
        }
      ],
      "sem3": [
        {
          id: "Electronics and Electricals",
          name: "Basic Electronics and Electricals",
          code: "22310",
          papers: [
            {
              id: "ee-w18",
              title: "Winter 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1cYVVW6-3Guxcoms5WpnTnZy12_-ZeL0l/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "391 kB"
            },
            {
              id: "ee-s19",
              title: "Summer 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1_cSlyBetbiRKBs_OnPTezkMy0vd7s6Mg/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "194 kB"
            },
            {
              id: "ee-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1_cSlyBetbiRKBs_OnPTezkMy0vd7s6Mg/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "194 kB"
            },
            {
              id: "ee-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1O-jqnkcMX3ghIzcgVcuHLQxABhjouvKE/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "109 kB"
            },
            {
              id: "ee-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1rsoO6axXEwFvOOTFlT8VJMxltDgBPI-Z/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "109 kB"
            },
            {
              id: "ee-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1PpuoXVnAosmdJcsa1Y_eDR3egeX1bOrJ/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "112 kB"
            },
            {
              id: "ee-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1jAsD6UFC8GVHB22f1wbEcX4bdjshcPiP/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "105 kB"
            }
          ]
        },
        {
          id: "Engineering Metrology",
          name: "Engineering Metrology",
          code: "22342",
          papers: [
            {
              id: "me-w18",
              title: "Winter 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/18QklVzX5ai7NoBfCMFvTlD1nl8fzAtdq/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "359 kB"
            },
            {
              id: "me-s19",
              title: "Summer 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1gb5Re_qXOeUey7VD9P9d5_l5uOnzYxlo/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "392 kB"
            },
            {
              id: "me-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1KxaNECEe5Owrkj2zDArvr38Ibo3oAxkg/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "200 kB"
            },
            {
              id: "me-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/10ndgew1oxZ0gnsukSAACT_5CJ2pjXBKT/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "200 kB"
            },
            {
              id: "me-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/13UAtg1gQniQjwEVryxjafvohCF-mcUYl/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "116 kB"
            },
            {
              id: "me-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/10RsMZzC2IAdABkiaFKKPQV6J_pAOWzE8/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "197 kB"
            },
            {
              id: "me-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1-IRl8-1D8_cmuO4EqWQ_kLW36WABt8qp/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "195 kB"
            }
          ]
        },
        {
          id: "Mechanical Drawing",
          name: "Mechanical Working Drawing",
          code: "22341",
          papers: [
            {
              id: "md-w18",
              title: "Winter 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1Bsa9-kvt1cZJ09X4Q8d7lzoOaVuqPTGd/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "625 kB"
            },
            {
              id: "md-s19",
              title: "Summer 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/12iKxhiZkJUcpRCn7IXRbJZ7j2RL3DnGx/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "539 kB"
            },
            {
              id: "md-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1Z-X0c7T8prSKgE-EC4OtzdwGssH-tepl/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "541 kB"
            },
            {
              id: "md-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1d22qGjZtEh5qfWCTO_R2id98e2_HoWfs/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "1.6 MB"
            },
            {
              id: "md-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1SIA01mOevZnRQN7oLaxvKyg6h9kK-nlr/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "1.2 MB"
            },
            {
              id: "md-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1svzB2uvGmZuZ0kB_NX136-775NOJBh2m/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "637 kB"
            },
            {
              id: "md-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1C3O3TQ_GV6uV6R0I57TMn47bNDHRxGnt/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "1.1 MB"
            }
          ]
        },
        {
          id: "Strength of materials",
          name: "Strength of materials",
          code: "22306",
          papers: [
            {
              id: "sm-w18",
              title: "Winter 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/15XlVDr-dae05fO1WkGaF3jO_V88ZovlZ/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "232 kB"
            },
            {
              id: "sm-s19",
              title: "Summer 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/15Bs6MQexJxACvqTTwXkixRHEyK3rmMt5/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "208 kB"
            },
            {
              id: "sm-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1Eu2w3TyzYVKe4al-_Ktyb6MWLGBzXB_i/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "185 kB"
            },
            {
              id: "sm-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1OFOUjOvalnHYKhKaNlhoGtwTy9diktdS/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "134 kB"
            },
            {
              id: "sm-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1snLazLubq2XR51hMpQaokVjxJAXz9zJo/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "169 kB"
            },
            {
              id: "sm-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1rFBsqcWj0C7qexDJNLvNmCBvlxBv_6Gp/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "152 kB"
            },
            {
              id: "sm-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/15ORCq_3lCmkCrewhv3d_XqcYM51p6lxV/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "135 kB"
            }
          ]
        },
        {
          id: "Thermal Engineering",
          name: "Thermal Engineering",
          code: "22337",
          papers: [
            {
              id: "te-w18",
              title: "Winter 2018",
              year: "2018",
              type: "Regular",
              url: "https://drive.google.com/file/d/1x1FzSCRHpV-vC2PwqDj-25q1z8OY7ErX/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "177 kB"
            },
            {
              id: "te-s19",
              title: "Summer 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1rJVRmo4nKDmqzPUO4H0TdM9_Fw8oYps_/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "188 kB"
            },
            {
              id: "te-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1uR8UNuQ6-xaKBkwDDdZsZDRCo-ZfWdzy/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "179 kB"
            },
            {
              id: "te-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1oM_NtR5Bw3GtCpVWnfGoQZpdrDteOzMG/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "105 kB"
            },
            {
              id: "te-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1wejYKJqHGqL8EOJPCqBlSJcy359aI_vF/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "104 kB"
            },
            {
              id: "te-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1WIyeyz69C5YWQAb4WhU7bNEvhlPo8x4D/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "102 kB"
            },
            {
              id: "te-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/14CaYhcukPr34hKAe37REaIq3JgJLYfh1/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "111 kB"
            }
          ]
        }
      ],
      "sem4": [
        {
          id: "Fluid Mechanics",
          name: "Fluid Mechanics and Machinary",
          code: "22445",
          papers: [
            {
              id: "fm-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1DsE-drUPxYKRRgyJCusz3xtPHT69MrMH/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "152 kB"
            },
            {
              id: "fm-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1AIoGRw6rQ1mxeSQdlvJEnHdjWjtZZktD/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "111 kB"
            },
            {
              id: "fm-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1spRoiL4pJTraE8T7LLjlrC8R_RwNRoiv/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "112 kB"
            },
            {
              id: "fm-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1KWdpq6Pn7uAw-OCO55rasGmoV8j2kaxt/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "106 kB"
            },
            {
              id: "fm-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1d06We_eVyaSJJ92uLC4FvMF8tm2LSit0/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "112 kB"
            }
          ]
        },
        {
          id: "Mechanical Engineering Measurement",
          name: "Mechanical Engineering Measurement",
          code: "22443",
          papers: [
            {
              id: "me-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1rmu8nfGnddn4iQWwynTS9lNZBBIXlceO/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "173 kB"
            },
            {
              id: "me-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1KwbwXACpVsON_gO91Ll6vQ3B-VU5lLxE/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "386 kB"
            },
            {
              id: "me-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1Q5kiYsEaYCz5qVuqakzhAc1ngnpgafk-/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "108 kB"
            },
            {
              id: "me-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1J9dfibrOzHrRnFog0sPJgNFwy1L0bO2w/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "186 kB"
            },
            {
              id: "me-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1G7ugPn3A7fEwMwJyhpVG1dQ5U1gsO6hG/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "102 kB"
            }
          ]
        },
        {
          id: "Manufacturing",
          name: "Manufacturing Process",
          code: "22446",
          papers: [
            {
              id: "man-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/19If5HP38cbR2N5quOsWaUpOJ1YVIYyM8/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "184 kB"
            },
            {
              id: "man-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1c9WyRABPBYmUHVvrnhB0T_Wc-h1e637Z/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "92 kB"
            },
            {
              id: "man-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1B85QBfRKa-sK8qFYBz_oENsA1-nJViVI/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "100 kB"
            },
            {
              id: "man-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1pFKiX9cbqTnxiK4QT0KzUrkcqMVWyXaQ/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "94 kB"
            },
            {
              id: "man-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1btt2TeRIWq6RXsFYu34p92KEuGEABEok/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "96 kB"
            }
          ]
        },
        {
          id: "Theory of Machines",
          name: "Theory of Machines",
          code: "22438",
          papers: [
            {
              id: "tm-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1WtS6AxKX_9nAqEjMn-fr0gmnpv80x0dj/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "219 kB"
            },
            {
              id: "tm-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1TikuWpqNwUfO7kUAPKrzqM8Gvb-dSnzp/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "399 kB"
            },
            {
              id: "tm-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/12mRfEp0NwbO76gApa-ghqbFu3AWwpo5b/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "119 kB"
            },
            {
              id: "tm-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1rSO37BUWBIhB6mIwwojHYZsC33j16uKy/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "202 kB"
            },
            {
              id: "tm-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1Ccva7j9k_EwdCXsoGc70xI_J9kcHQxUu/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "120 kB"
            }
          ]
        }
      ],
      "sem5": [
        {
          id: "Manufacturing",
          name: "Advance Manufacturing Process",
          code: "22563",
          papers: [
            {
              id: "man-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1CpepSVm2Y-9Ua0JzRmDV_BNNI9_sGUlz/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "250 kB"
            },
            {
              id: "man-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1CCeDPZbIiYLHxr-zG-zFdeDtWfiW0N_k/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "110 kB"
            },
            {
              id: "man-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/12x0QARwqXX8Ili0HJk1dXSlxuZ5ITJdf/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "158 kB"
            },
            {
              id: "man-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1l8CJRs8r1C199V94phArZIkQuhdQqKmu/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "366 kB"
            },
            {
              id: "man-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1pJBqjhSPMlfWm8UWgG70mDjXbRYh9kdC/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "107 kB"
            }
          ]
        },
        {
          id: "Machine Design",
          name: "Elements of Machine Design",
          code: "22564",
          papers: [
            {
              id: "md-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1aWULJGRf6qveHJQgwRlNG0U6guu12Yji/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "236 kB"
            },
            {
              id: "md-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1rMVdS8m-UAVbhYyX35PwzhuQoQFn7qqe/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "207 kB"
            },
            {
              id: "md-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1QLdyGh5qOWQufKmjLSzxBjQRdSkQ6jdZ/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "125 kB"
            },
            {
              id: "md-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1u0kAEWx-xMCKlDobhhhWiIpu1cOz_3oy/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "122 kB"
            },
            {
              id: "md-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1vgHZO95okzjYAj0WDuAEHTkFC28p45Yk/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "105 kB"
            }
          ]
        },
        {
          id: "Refrigeration",
          name: "Power Engineering and refrigeration",
          code: "22562",
          papers: [
            {
              id: "ref-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1Z0rE09AjqV1qvuicWNCE-fbIE2r1HG5E/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "389 kB"
            },
            {
              id: "ref-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1WVFgR6p8VuSi_jO_dvc9M5BH-mS5pYsP/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "214 kB"
            },
            {
              id: "ref-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1xIdjyV1qGk-_FLadrF4w_vvG-FsHP6_q/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "120 kB"
            },
            {
              id: "ref-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/17akPgNaLLSA1MBDNd9HtS63w4Ws7iLsb/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "427 kB"
            },
            {
              id: "ref-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1ht3OAT7-l_P2WcFrRjY_MQJV6dngBidQ/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "123 kB"
            }
          ]
        },
        {
          id: "power plant Engineering",
          name: "Power plant Engineering",
          code: "22566",
          papers: [
            {
              id: "ppe-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1ewm6eYrB8BNT7zzm4XdZARpgh_kWrWCf/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "186 kB"
            },
            {
              id: "ppe-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1ZwVXCzY3GsjuXKP1AhG2iKxQMmCOkSGJ/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "201 kB"
            },
            {
              id: "ppe-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1Ypt8Iwq4OVJaHZAWpA8uaA9yPVW4oJuG/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "114 kB"
            },
            {
              id: "ppe-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1a7yoiAoQEuBP2iCi0uRPlRjN2KjB43Lj/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "374 kB"
            },
            {
              id: "ppe-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1aSNamVzoa5zc5FjYlQACaFkd3LTjAubl/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "109 kB"
            }
          ]
        },
        {
          id: "Tool Engineering",
          name: "Tool Engineering",
          code: "22565",
          papers: [
            {
              id: "tool-w19",
              title: "Winter 2019",
              year: "2019",
              type: "Regular",
              url: "https://drive.google.com/file/d/1gLhNzoSOReQqHOvGHXXLhFMikrTXKc0Q/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "402 kB"
            },
            {
              id: "tool-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "https://drive.google.com/file/d/1v31R_A5gimuqy2Od0VhX0SI2YX4_ndIF/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "205 kB"
            },
            {
              id: "tool-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1cMRGTGadKLNh6izIqECqL0fYTGwxsod8/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "105 kB"
            },
            {
              id: "tool-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "https://drive.google.com/file/d/1OzNU22q0W-htgbWha2-NsnXYAm5BMhcL/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "396 kB"
            },
            {
              id: "tool-s24",
              title: "Summer 2024",
              year: "2024",
              type: "Regular",
              url: "https://drive.google.com/file/d/1LEihEXAjW2UYtU1upaEfPZiIgS3UW-Rh/view?usp=drive_link",
              downloadCount: 123,
              lastDownloaded: "2024-01-12",
              fileSize: "183 kB"
            }
          ]
        }
      ],
      "sem6": [
      {
        id: "thermo",
        name: "Thermodynamics",
        code: "ME301",
        papers: [
          {
            id: "thermo-s23",
            title: "Summer 2023",
            year: "2023",
            type: "Regular",
            url: "https://drive.google.com/file/d/your_thermo_s23_url",
            downloadCount: 120,
            lastDownloaded: "2024-01-10",
            fileSize: "120 kB"
          },
          {
            id: "thermo-w23",
            title: "Winter 2023",
            year: "2023",
            type: "Regular",
            url: "https://drive.google.com/file/d/your_thermo_w23_url",
            downloadCount: 110,
            lastDownloaded: "2024-01-12",
            fileSize: "130 kB"
          }
        ]
      },
      {
        id: "fluid",
        name: "Fluid Mechanics",
        code: "ME302",
        papers: [
          {
            id: "fluid-s23",
            title: "Summer 2023",
            year: "2023",
            type: "Regular",
            url: "https://drive.google.com/file/d/your_fluid_s23_url",
            downloadCount: 100,
            lastDownloaded: "2024-01-11",
            fileSize: "115 kB"
          },
          {
            id: "fluid-w23",
            title: "Winter 2023",
            year: "2023",
            type: "Regular",
            url: "https://drive.google.com/file/d/your_fluid_w23_url",
            downloadCount: 105,
            lastDownloaded: "2024-01-12",
            fileSize: "125 kB"
          }
        ]
      },
      {
        id: "dynamics",
        name: "Machine Dynamics",
        code: "ME303",
        papers: [
          {
            id: "dyn-s23",
            title: "Summer 2023",
            year: "2023",
            type: "Regular",
            url: "https://drive.google.com/file/d/your_dyn_s23_url",
            downloadCount: 90,
            lastDownloaded: "2024-01-11",
            fileSize: "110 kB"
          },
          {
            id: "dyn-w23",
            title: "Winter 2023",
            year: "2023",
            type: "Regular",
            url: "https://drive.google.com/file/d/your_dyn_w23_url",
            downloadCount: 85,
            lastDownloaded: "2024-01-12",
            fileSize: "120 kB"
          }
        ]
      }
    ]
    }
  }
];

export default function QuestionPapers() {
  const [selectedDepartment, setSelectedDepartment] = useState("")
  const [selectedSemester, setSelectedSemester] = useState("")
  const [selectedYear, setSelectedYear] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(true)
  const [downloadHistory, setDownloadHistory] = useState([])
  const [sortBy, setSortBy] = useState('date')
  const [viewMode, setViewMode] = useState('grid')

  const semesters = ["sem1", "sem2", "sem3", "sem4", "sem5", "sem6"]
  const years = ["2023", "2022", "2021", "2020"]

  // useEffect(() => {
  //   // Load download history from localStorage
  //   const history = localStorage.getItem('downloadHistory')
  //   if (history) {
  //     setDownloadHistory(JSON.parse(history))
  //   }
  // }, [])

  const openPdf = (paper) => {
    window.open(paper, '_blank')

    // Update download history
    // const updatedHistory = [paper, ...downloadHistory.filter(p => p.id !== paper.id)].slice(0, 10)
    // setDownloadHistory(updatedHistory)
    // localStorage.setItem('downloadHistory', JSON.stringify(updatedHistory))
  }

  const filteredSubjects = selectedDepartment && selectedSemester
    ? departments
      .find(d => d.id === selectedDepartment)
      ?.subjects[selectedSemester]
      ?.filter(subject =>
        subject.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        subject.code.includes(searchQuery)
      )
    : []

  const getFilteredPapers = (papers) => {
    return papers
      .filter(paper => !selectedYear || paper.year === selectedYear)
      .sort((a, b) => {
        if (sortBy === 'downloads') {
          return b.downloadCount - a.downloadCount
        }
        return new Date(b.lastDownloaded || '').getTime() - new Date(a.lastDownloaded || '').getTime()
      })
  }

  return (
    <div className="question-papers-page">
      {/* Header */}
      <header className="question-papers-page-header">
        <div className="question-papers-header-content">
          <Link to="/academics" className="question-papers-back-button">
            <ArrowLeft className="question-papers-button-icon" />
          </Link>
          <h1>Question Papers</h1>
        </div>
      </header>

      <main className="question-papers-main-content">
        {/* Search and Filters */}
        <div className="question-papers-search-filters-section">
          <div className="question-papers-search-box">
            <Search className="question-papers-search-icon" />
            <input
              type="text"
              placeholder="Search by subject name or code..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="question-papers-filter-toggle"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="question-papers-button-icon" />
              Filters
              <ChevronDown className={`question-papers-button-icon ${showFilters ? 'rotate' : ''}`} />
            </button>
          </div>

          {showFilters && (
            <div className="question-papers-filters-panel">
              <div className="question-papers-filter-controls">
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="question-papers-filter-select"
                >
                  <option value="">Select Department</option>
                  {departments.map(dept => (
                    <option key={dept.id} value={dept.id}>{dept.name}</option>
                  ))}
                </select>

                <select
                  value={selectedSemester}
                  onChange={(e) => setSelectedSemester(e.target.value)}
                  className="question-papers-filter-select"
                  disabled={!selectedDepartment}
                >
                  <option value="">Select Semester</option>
                  {semesters.map(sem => (
                    <option key={sem} value={sem}>Semester {sem.replace('sem', '')}</option>
                  ))}
                </select>

                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="question-papers-filter-select"
                >
                  <option value="">All Years</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="question-papers-filter-select"
                >
                  <option value="date">Sort by Date</option>
                  <option value="downloads">Sort by Downloads</option>
                </select>
              </div>

              <div className="question-papers-view-toggle">
                <button
                  className={`question-papers-view-button ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  <BarChart2 className="question-papers-button-icon" />
                  Grid View
                </button>
                <button
                  className={`question-papers-view-button ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                >
                  <Book className="question-papers-button-icon" />
                  List View
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Download History */}
        {downloadHistory.length > 0 && (
          <div className="question-papers-history-section">
            <h2>
              <History className="question-papers-section-icon" />
              Recent Downloads
            </h2>
            <div className="question-papers-history-list">
              {downloadHistory.map((paper) => (
                <div key={paper.id} className="question-papers-history-item">
                  <div className="question-papers-history-info">
                    <h3>{paper.title}</h3>
                    <span className="question-papers-history-meta">
                      Downloaded on {new Date(paper.lastDownloaded || '').toLocaleDateString()}
                    </span>
                  </div>
                  <button
                    className="question-papers-download-button small"
                    onClick={() => openPdf(paper.url)}
                  >
                    <Download className="question-papers-button-icon" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Papers Content */}
        <div className={`question-papers-papers-content ${viewMode}`}>
          {filteredSubjects.map(subject => (
            <div key={subject.id} className="question-papers-subject-card">
              <div className="question-papers-subject-header">
                <h3>{subject.name}</h3>
                <span className="question-papers-subject-code">{subject.code}</span>
              </div>
              <div className="question-papers-papers-list">
                {getFilteredPapers(subject.papers).map((paper) => (
                  <div key={paper.id} className="question-papers-paper-item">
                    <div className="question-papers-paper-info">
                      <h4>{paper.title}</h4>
                      <div className="question-papers-paper-meta">
                        <span className="question-papers-paper-type">{paper.type}</span>
                        <span className="question-papers-paper-year">{paper.year}</span>
                        <span className="question-papers-paper-downloads">
                          {paper.downloadCount} downloads
                        </span>
                        <span className="question-papers-paper-size">{paper.fileSize}</span>
                      </div>
                    </div>
                    <a
                      className="question-papers-download-button"
                      href={`${paper.url}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Download className="question-papers-button-icon" />
                      Download
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {(selectedSemester === "") && (filteredSubjects.length === 0) === true && (
          <div className="question-papers-empty-state">
            <Book className="question-papers-empty-icon" />
            <h2>No papers found</h2>
            <p>Please Select Branch and Semester correctly or Adjusting your search query</p>
          </div>
        )}
      </main>
    </div>
  )
}