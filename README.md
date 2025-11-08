# LED Control Website and Arduino Project

This project consists of a website that sends a signal to turn on an LED, and Arduino code to receive that signal and control an LED.

## Files

- `index.html` - The website with a button to send the LED signal
- `arduino_led_control.ino` - Arduino code for ESP32/ESP8266 to receive signal and control LED

## Website Setup

1. Open `index.html` in a web browser
2. Click the "Turn On LED" button
3. The website will send a POST request with value '1' to `https://nascentgroups.com/api/led`

## Arduino Setup

### Requirements
- ESP32 or ESP8266 board
- Arduino IDE
- Required libraries:
  - WiFi (built-in)
  - HTTPClient (built-in for ESP32) or ESP8266HTTPClient (for ESP8266)
  - ArduinoJson (install from Library Manager)

### Configuration Steps

1. **Install ArduinoJson Library:**
   - Open Arduino IDE
   - Go to Sketch → Include Library → Manage Libraries
   - Search for "ArduinoJson" and install it

2. **Configure WiFi:**
   - Open `arduino_led_control.ino`
   - Replace `YOUR_WIFI_SSID` with your WiFi network name
   - Replace `YOUR_WIFI_PASSWORD` with your WiFi password

3. **Select Board:**
   - For ESP32: Tools → Board → ESP32 Arduino → Select your ESP32 board
   - For ESP8266: Tools → Board → ESP8266 Boards → Select your ESP8266 board
   - Uncomment the appropriate WiFi library line in the code

4. **Adjust LED Pin:**
   - The default LED pin is 2 (GPIO2 for ESP32, D4 for ESP8266)
   - Change `ledPin` if your board uses a different pin

5. **Upload Code:**
   - Connect your board via USB
   - Select the correct COM port in Tools → Port
   - Click Upload

### How It Works

The Arduino code:
- Connects to WiFi
- Polls the server every second to check for LED signal
- When it receives value '1' from the server, it turns on the LED
- Otherwise, the LED stays off

## Important Notes

⚠️ **Server Endpoint Required:**
The website sends data to `https://nascentgroups.com/api/led`. You'll need to:
- Set up an endpoint on that server that can receive the POST request
- Store the value so the Arduino can retrieve it via GET request
- Or modify the code to use a different communication method

**Alternative Approach:** If you want the Arduino to act as a web server and receive requests directly, you would need different code. The current implementation assumes the server at nascentgroups.com acts as an intermediary.

## Troubleshooting

- **Arduino won't connect to WiFi:** Check your SSID and password
- **LED doesn't turn on:** Verify the LED pin number matches your board
- **Server errors:** Make sure the server endpoint is properly configured
- **Serial Monitor:** Open Serial Monitor at 115200 baud to see debug messages

