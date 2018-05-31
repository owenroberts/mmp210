void setup() {
  Serial.begin(9600);
  Serial.setTimeout(10);
}

void loop() {
  if (Serial.available() > 0) {
    int inByte = Serial.parseInt();
    if (inByte > 0) {
      Serial.write(inByte);
      analogWrite(13, inByte);
    }
  }
}

