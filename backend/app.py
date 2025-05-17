from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/api/planner', methods=['POST'])
def make_table():
    data = request.get_json()
    return jsonify({ "recieved": data })


if __name__ == '__main__':
    app.run(debug=True)