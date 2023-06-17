use chrono::{NaiveDateTime, Utc};
use uuid::Uuid;

use crate::users::person::User;

#[derive(Debug, Default)]
pub struct Attachment {

}
#[derive(Debug, Default)]
pub struct ConversationData {
  pub avatar: String,
  pub subject: String,
  pub welcome_message: String,
}
#[derive(Debug, Default)]
// #[diesel(table_name = users)]
pub struct Message {
    pub id: Uuid,
    pub sender: User,
    pub timestamp: NaiveDateTime,
    pub date_created: NaiveDateTime,
    pub date_read: Option<NaiveDateTime>,
    pub date_archived: Option<NaiveDateTime>,
}

#[derive(Debug, Default)]
pub struct MessageList {
    messages: Vec<Message>,
}

impl Message {
    pub fn new() -> Message {
        Message {
            id: Uuid::new_v4(),
            ..Default::default()
        }
    }
}

#[cfg(test)]
mod tests {
 use super::*;

  #[test]
    fn blank_message_created_with_defaults() {
        let result = Message::new();
        assert_eq!(result.id.hyphenated().to_string().len(), 36);
        assert!(result.date_read.is_none());
        assert!(result.date_archived.is_none());
    }
}
