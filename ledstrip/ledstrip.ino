#include <avr/io.h>
#include <util/delay.h>
#include "led.h"

const int led_blue = 3;
const int led_green = 9;
const int led_red = 10;
const int buflen = 20;
const int cmd_len = 3 + 1;

void set_pwm_freq() {
  uint8_t mode = 0x1;
  TCCR1B = TCCR1B & 0b11111000 | mode;
  TCCR2B = TCCR2B & 0b11111000 | mode;
}

void led_set(rgb col) {
  analogWrite(led_red, col.r);
  analogWrite(led_green, col.g);
  analogWrite(led_blue, col.b);
}

void led_flash(rgb col) {
  rgb c_black = {0};
  led_set(col);
  delay(20);
  led_set(col_black);
  delay(20);
}

void setup() {
  Serial.begin(9600);
  set_pwm_freq();
}

void loop() {
  rgb red = {255, 0, 0};
  rgb blue = {0, 0, 255};
  
  if(Serial.available()) {
    Serial.read();
    Serial.read();
    for(int i = 0; i < 10; i++) {
      led_flash(red);
    }
  } else {
  }
}
