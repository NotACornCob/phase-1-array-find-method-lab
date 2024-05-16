function superbowlWin(record) {
  for (const object of record) {
    if (object.result === "W") {
      return object.year;
    }
  }
}

superbowlWin(record);