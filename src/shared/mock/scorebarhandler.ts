interface ScoreItem {
  team: string;
  score: string;
}


http.get("/api/scores", () => {
        const mockScoresData: ScoreItem[] = [
            { team: "1조", score: "100점" },
            { team: "2조", score: "95점" },
            { team: "3조", score: "88점" },
            { team: "4조", score: "92점" },
            { team: "5조", score: "75점" },
            { team: "6조", score: "100점" },
            { team: "7조", score: "80점" },
            { team: "8조", score: "100점" },
        { team: "9조", score: "95점" },
        { team: "10조", score: "88점" },
        { team: "11조", score: "92점" },
        { team: "12조", score: "75점" },
        { team: "13조", score: "100점" },
        { team: "14조", score: "80점" },
        ];
    
        return HttpResponse.json(mockScoresData, {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      }),