void setup() {
  Serial.begin(9600);
}

void loop() {
  int button = digitalRead(2);
  Serial.write(button);
  delay(10);
}

