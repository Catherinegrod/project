import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

class Main extends JFrame {
    private JTextField f;
    private String c = "";
    private boolean NiN = true;
    privete double ap=0;

    public Main() {
        super("Calculator");
        setSize(420, 420);
        setLayout(null);
        JTextField f = new JTextField("0");
        f.setBounds(15, 15, 370, 35);
        add(f);
        JButton b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bP, bMi, bMu, bD, bR;
        b0 = new JButton("0");
        b0.setBounds(10, 310, 150, 70);
        add(b0);
        b1 = new JButton("1");
        b1.setBounds(10, 230, 70, 70);
        add(b1);
        b2 = new JButton("2");
        b2.setBounds(90, 230, 70, 70);
        add(b2);
        b3 = new JButton("3");
        b3.setBounds(170, 230, 70, 70);
        add(b3);
        b4 = new JButton("4");
        b4.setBounds(10, 150, 70, 70);
        add(b4);
        b5 = new JButton("5");
        b5.setBounds(90, 150, 70, 70);
        add(b5);
        b6 = new JButton("6");
        b6.setBounds(170, 150, 70, 70);
        add(b6);
        b7 = new JButton("7");
        b7.setBounds(10, 70, 70, 70);
        add(b7);
        b8 = new JButton("8");
        b8.setBounds(10, 70, 70, 70);
        add(b8);
        b9 = new JButton("9");
        b9.setBounds(170, 70, 70, 70);
        add(b9);
        bP = new JButton("+");
        bP.setBounds(250, 70, 70, 70);
        add(bP);
        bMi = new JButton("-");
        bMi.setBounds(250, 150, 70, 70);
        add(bMi);
        bMu = new JButton("*");
        bMu.setBounds(250, 230, 70, 70);
        add(bMu);
        bD = new JButton(":");
        bD.setBounds(250, 310, 70, 70);
        add(bD);
        bR = new JButton("=");
        bR.setBounds(330, , 70, 70);
        add(bR);
        bR.addActionListener(new ActionListener(){
                                 @Override
                                 public void actionPerformed (ActionEvent events) {
                                     if (NiN) {
                                         f.setText("=");
                                         NiN = false;
                                     }
                                     else {
                                         f.satText(f.getText()+"=");
                                     }
                                 }
                             }
        bD.addActionListener(new ActionListener(){
                                 @Override
                                 public void actionPerformed (ActionEvent events) {
                                     if (NiN) {
                                         f.setText("/");
                                         NiN = false;
                                     }
                                     else {
                                         f.satText(f.getText()+"/");
                                     }
                                 }
                             }
        bMu.addActionListener(new ActionListener(){
                                 @Override
                                 public void actionPerformed (ActionEvent events) {
                                     if (NiN) {
                                         f.setText("*");
                                         NiN = false;
                                     }
                                     else {
                                         f.satText(f.getText()+"*");
                                     }
                                 }
                             }
        bMi.addActionListener(new ActionListener(){
                                 @Override
                                 public void actionPerformed (ActionEvent events) {
                                     if (NiN) {
                                         f.setText("-");
                                         NiN = false;
                                     }
                                     else {
                                         f.satText(f.getText()+"-");
                                     }
                                 }
                             }
        bP.addActionListener(new ActionListener(){
                                 @Override
                                 public void actionPerformed (ActionEvent events) {
                                     if (NiN) {
                                         f.setText("+");
                                         NiN = false;
                                     }
                                     else {
                                         f.satText(f.getText()+"+");
                                     }
                                 }
                             }
        b0.addActionListener(new ActionListener(){
            @Override
            public void actionPerformed (ActionEvent events) {
                if (NiN) {
                    f.setText("0");
                    NiN = false;
                }
                else {
                    f.satText(f.getText()+"0");
                }
            }
        }
       b1.addActionListener(new ActionListener(){
             @Override
            public void actionPerformed (ActionEvent events) {
               if (NiN) {
               f.setText("1");
                  NiN = false;
              }
              else {
                  f.satText(f.getText()+"1");
                  }
             }
       }
       b2.addActionListener(new ActionListener(){
           @Override
           public void actionPerformed (ActionEvent events) {
                if (NiN) {
                   f.setText("2");
                   NiN = false;
               }
               else {
                   f.satText(f.getText()+"2");
               }
          }
         }
       b3.addActionListener(new ActionListener(){
                                 @Override
                                 public void actionPerformed (ActionEvent events) {
                                     if (NiN) {
                                        f.setText("3");
                                        NiN = false;
                                   }
                                   else {
                                       f.satText(f.getText()+"3");
                                    }
                                }
                           }
      b4.addActionListener(new ActionListener(){
                           @Override
                               public void actionPerformed (ActionEvent events) {
                                    if (NiN) {
                                          f.setText("4");
                                      NiN = false;
                                   }
                                   else {
                                      f.satText(f.getText()+"4");
                                    }
                                }
                              }
        b5.addActionListener(new ActionListener(){
           @Override
          public void actionPerformed (ActionEvent events) {
             if (NiN) {
                        f.setText("5");
                      NiN = false;
                   }
                  else {
                     f.satText(f.getText()+"5");
                   }
               }
          }
      b6.addActionListener(new ActionListener(){
          @Override
           public void actionPerformed (ActionEvent events) {
             if (NiN) {
                 f.setText("6");
                 NiN = false;
           }
          else {
               f.satText(f.getText()+"6");
             }
         }
      }
              b9.addActionListener(new ActionListener(){
                                       @Override
                                       public void actionPerformed (ActionEvent events) {
                                           if (NiN) {
                                               f.setText("9");
                                               NiN = false;
                                           }
                                           else {
                                               f.satText(f.getText()+"9");
                                           }
                                       }
                                   }
              b8.addActionListener(new ActionListener(){
                                       @Override
                                       public void actionPerformed (ActionEvent events) {
                                           if (NiN) {
                                               f.setText("8");
                                               NiN = false;
                                           }
                                           else {
                                               f.satText(f.getText()+"8");
                                           }
                                       }
                                   }
              b7.addActionListener(new ActionListener(){
                  @Override
                  public void actionPerformed (ActionEvent events) {
                      if (NiN) {
                          f.setText("7");
                          NiN = false;
                      }
                      else {
                          f.satText(f.getText()+"7");
                      }
                  }
              }



    }

    void handleButtonClick(String l) {
        if ("+-*/".contains(l)) {
            applyOperator(l);
        } else if ("=".equals(l)) {
            calculateResult();
        } else if ("0123456789".contains(l)) {
            appendDigit(l);
        }
    }

    void appendDigit(String e) {
        if (NiN) {
            f.setText(e);
            NiN = false;
        } else {
            String c = f.getText();
            if (c.equals("0")) {
                f.setText(e);
            } else {
                f.setText(c + e);

            }
        }
    }

    private void applyOperator(String p) {
        if (!c.equals("")) {
            return;
        }
        c = p + " " + f.getText();
        NiN = true;
    }

    private void result() {

    }


    public static void main(String[] args) {
        Main app = new Main();
        app.setVisible(true);
    }
}

