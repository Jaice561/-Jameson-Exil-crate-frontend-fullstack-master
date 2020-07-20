1. **What does this PR do?**
    This PR Fixed the bug that can potentially lead to customers being charged twice for the same subscription
    It will throw in an error message, as "already subscribe to this crate" if user tries to subcribe twice.

    This PR also has the rating functionality through which user can rate a crate

2. **How should this PR be tested?**
    If user navigate to crate page, click on subscribe for any of the crate. If user click on the  subscribe button for the same crate, then It will throw in an error message, as "already subscribe to this crate".

    hover the mouse on rating, user will be able to select a rating. User will be able to change the rating, if the user click on the rating again.
