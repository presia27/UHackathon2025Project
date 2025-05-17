from flask import Flask, jsonify, request


app = Flask(__name__)

#heres our API key  for langchain: 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

@app.route('/api/planner', methods=['POST'])
def make_table():
    data = request.get_json()
    return jsonify({ "recieved": data })


if __name__ == '__main__':
    app.run(debug=True)