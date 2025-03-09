import { useState, useEffect } from 'react'
import { ArrowLeft, Download, Search, Filter, ChevronDown, BarChart2, Book, History } from 'lucide-react'
import {Link} from 'react-router-dom'
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
              type: "Question Paper",
              url: "https://drive.google.com/file/d/114LuW34i_fzQeNlfJeeg5LldGDQzOBJr/view?usp=drive_link",
              downloadCount: 156,
              lastDownloaded: "2024-01-12",
              fileSize: "386 kB"
            },
            {
              id: "eng-w18",
              title: "Winter 2018",
              year: "2018",
              type: "Model Answer",
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
        papers:[
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
        papers:[
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
    "sem4":[
      {
        id: "Data Communication",
        name: "Data communication and Computer network",
        code: "22414",
        papers:[
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
        papers:[
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
        papers:[
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
        papers:[
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
    "sem5":[
      {
        id: "Operating System",
        name: "Operating System",
        code: "22516",
        papers:[
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
        papers:[
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
        papers:[
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
        papers:[
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
        papers:[
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
    "sem6":[
      {
        id: "Python",
        name: "Programming with python",
        code: "22616",
        papers:[
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
        papers:[
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
        papers:[
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
        papers:[
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
        papers:[
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
      "sem2":[
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
          papers:[
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
          papers:[
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
          papers:[
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
      "sem3":[
        {
          id: "Analog",
          name: "Analog Electronics",
          code: "22329",
          papers:[
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
          papers:[
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
          papers:[
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
          papers:[
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
          papers:[
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
      "sem4":[
        {
          id: "Power Electronics",
          name: "Basic Power Electronics",
          code: "22427",
          papers:[
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
          papers:[
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

  function handlegoback(){
    window.history.back();
}

  return (
    <div className="question-papers-page">
      {/* Header */}
      <header className="question-papers-page-header">
        <div className="question-papers-header-content">
          <Link to="" onClick={handlegoback} className="question-papers-back-button">
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
                      style={{textDecoration: "none"}}
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
