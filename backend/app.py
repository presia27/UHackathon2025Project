from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/planner', methods=['POST'])
def make_table():
    data = request.get_json()

    if not data or "input" not in data:
        return jsonify({ "error": "Missing 'input' field" }), 400

    user_input = data["input"]
    print("Received user input:", user_input)

    example_schedule = [
        {
            "start": "7:00 AM",
            "end": "8:00 AM",
            "activity": "Meeting with team"
        },
        {
            "start": "8:30 AM",
            "end": "9:30 AM",
            "activity": "Work on project"
        }
    ]

    return jsonify(example_schedule), 200

if __name__ == '__main__':
    app.run(debug=True)
