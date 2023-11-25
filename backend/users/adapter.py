from allauth.account.adapter import DefaultAccountAdapter


class CustomUserAdapter(DefaultAccountAdapter):
    def get_email_confirmation_url(self, request, emailconfirmation):
        return request.build_absolute_uri(
            f"/account-confirm-email/{emailconfirmation.key}/"
        )
