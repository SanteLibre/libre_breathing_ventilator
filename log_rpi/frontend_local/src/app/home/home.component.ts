import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  data =   [
    {
      "name": "Income",
      "data": [
        [
          "Mon",
          100
        ],
        [
          "Tue",
          300
        ],
        [
          "Wed",
          200
        ],
        [
          "Thu",
          400
        ],
        [
          "Fri",
          600
        ],
        [
          "Sat",
          700
        ],
        [
          "Sun",
          500
        ]
      ]
    },
    {
      "name": "Outcome",
      "data": [
        [
          "Mon",
          50
        ],
        [
          "Tue",
          100
        ],
        [
          "Wed",
          100
        ],
        [
          "Thu",
          300
        ],
        [
          "Fri",
          100
        ],
        [
          "Sat",
          200
        ],
        [
          "Sun",
          300
        ]
      ]
    },
    {
      "name": "Profit",
      "data": [
        [
          "Mon",
          50
        ],
        [
          "Tue",
          200
        ],
        [
          "Wed",
          400
        ],
        [
          "Thu",
          200
        ],
        [
          "Fri",
          500
        ],
        [
          "Sat",
          500
        ],
        [
          "Sun",
          200
        ]
      ]
    }
  ];
  data1 =   [
    {
      "name": "Income",
      "data": [
        [
          "Mon",
          100
        ],
        [
          "Tue",
          300
        ],
        [
          "Wed",
          200
        ],
        [
          "Thu",
          400
        ],
        [
          "Fri",
          600
        ],
        [
          "Sat",
          700
        ],
        [
          "Sun",
          500
        ]
      ]
    },
    {
      "name": "Outcome",
      "data": [
        [
          "Mon",
          50
        ],
        [
          "Tue",
          100
        ],
        [
          "Wed",
          100
        ],
        [
          "Thu",
          300
        ],
        [
          "Fri",
          100
        ],
        [
          "Sat",
          200
        ],
        [
          "Sun",
          300
        ]
      ]
    },
    {
      "name": "Profit",
      "data": [
        [
          "Mon",
          50
        ],
        [
          "Tue",
          200
        ],
        [
          "Wed",
          400
        ],
        [
          "Thu",
          200
        ],
        [
          "Fri",
          500
        ],
        [
          "Sat",
          500
        ],
        [
          "Sun",
          200
        ]
      ]
    }
  ];
  data2 =   [
    {
      "name": "Income",
      "data": [
        [
          "Mon",
          100
        ],
        [
          "Tue",
          300
        ],
        [
          "Wed",
          200
        ],
        [
          "Thu",
          400
        ],
        [
          "Fri",
          600
        ],
        [
          "Sat",
          700
        ],
        [
          "Sun",
          500
        ]
      ]
    },
    {
      "name": "Outcome",
      "data": [
        [
          "Mon",
          50
        ],
        [
          "Tue",
          100
        ],
        [
          "Wed",
          100
        ],
        [
          "Thu",
          300
        ],
        [
          "Fri",
          100
        ],
        [
          "Sat",
          200
        ],
        [
          "Sun",
          300
        ]
      ]
    },
    {
      "name": "Profit",
      "data": [
        [
          "Mon",
          50
        ],
        [
          "Tue",
          200
        ],
        [
          "Wed",
          400
        ],
        [
          "Thu",
          200
        ],
        [
          "Fri",
          500
        ],
        [
          "Sat",
          500
        ],
        [
          "Sun",
          200
        ]
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
