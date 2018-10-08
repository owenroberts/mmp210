void setup() {
  Serial.begin(9600);
}

void loop() {
  int buttonState = digitalRead(2);
  int potValue = analogRead(A0);
  Serial.print(buttonState);
  Serial.print(',');
  Serial.println(potValue);
  delay(3);
}

