from flask import Flask, jsonify

app = Flask(__name__)

@app.route('C:\Users\Administrator\Documents\DOS\DOS-IPS-COPY\src\App.js')
def get_data():
    # Data you want to send to the frontend
    data = {"message": "Hello from Flask!"}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)