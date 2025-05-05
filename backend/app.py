from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api', methods=['POST'])
def handle_form():
    data = request.json
    return jsonify({"received": data})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
