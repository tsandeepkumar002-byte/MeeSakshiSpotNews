from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
@app.route('/')
def home():
    return "✅ Mee Sakshi News Backend is Live!"

news_list = []

@app.route('/submit', methods=['POST'])
def submit_news():
    reporter = request.form.get("reporter")
    dateline = request.form.get("dateline")
    heading = request.form.get("heading")
    subheading = request.form.get("subheading")
    details = request.form.get("details")
    image = request.files.get("image")

    image_url = None
    if image:
        image.save(f"static/{image.filename}")
        image_url = f"/static/{image.filename}"

    news_item = {
        "reporter": reporter,
        "dateline": dateline,
        "heading": heading,
        "subheading": subheading,
        "details": details,
        "image": image_url,
        "status": "pending"
    }
    news_list.append(news_item)
    return jsonify({"message": "News submitted successfully!"}), 200


@app.route('/list', methods=['GET'])
def list_news():
    return jsonify(news_list)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=10000)
