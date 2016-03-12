#ifndef _LED_H_
#define _LED_H_

#include <stdint.h>

#ifdef __cplusplus
extern "C" {
#endif

typedef struct rgb {
  uint8_t r;
  uint8_t g;
  uint8_t b;
} rgb;

typedef enum {OFF, ON, DIM, STROBE, STROBE_2, N_MODES} mode;

const rgb col_white = {255, 255, 255};
const rgb col_black = {0};

void col_dim(int factor, rgb src, rgb *dest) {
  dest->r = ((int)src.r) * factor / 255;
  dest->g = ((int)src.g) * factor / 255;
  dest->b = ((int)src.b) * factor / 255;
}

#ifdef __cplusplus
}
#endif
#endif
