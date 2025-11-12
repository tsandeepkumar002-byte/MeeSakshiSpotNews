@"
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

news_list = []

@app.route('/submit', methods=['POST'])
def submit_news():
    data = request.get_json()
    news_item = {
        "heading": data.get("heading"),
        "subheading": data.get("subheading"),
        "details": data.get("details"),
        "status": "pending"
    }
    news_list.append(news_item)
    return jsonify({"message": "News submitted successfully!"}), 200

@app.route('/list', methods=['GET'])
def list_news():
    return jsonify(news_list)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=10000)
"@ | Out-File -Encoding utf8 app.py
