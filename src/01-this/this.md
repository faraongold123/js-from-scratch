| this:               | definition                                                                          |
| :------------------ | :---------------------------------------------------------------------------------- |
| simple cal ()       | this === undefined                                                                  |
| method              | obj.method(): this === obj                                                          |
| arrow func          | this === lexical this(object where fn is declared )                                 |
| with keyword new    | this === new {}                                                                     |
| call/apply/bind     | this === argThis                                                                    |
| DOM-event           | this === event.currentTarget                                                        |
| setTimeout callback | this === depends on runtime (globalWindow for browsers, TimeOut object for node.js) |
| class field         | this === class instance                                                             |
