export PATH=$HOME/bin:/usr/local/bin:$PATH

export ZSH="$HOME/.oh-my-zsh"
ZSH_THEME="headline"
source ~/.zsh/catppuccin_mocha-zsh-syntax-highlighting.zsh

plugins=(
git
git-open
brew
cask
history
history-substring-search
zsh-autosuggestions
zsh-interactive-cd
zsh-navigation-tools
zsh-syntax-highlighting
)

source $ZSH/oh-my-zsh.sh
[ "$TERM" = "xterm-kitty" ] && alias ssh="kitty +kitten ssh"
neofetch
 eval "$(register-python-argcomplete pipx)"
# Created by `pipx` on 2023-02-28 06:54:31
export PATH="$PATH:/Users/jeli/.local/bin"

function awsauth { $HOME/aws-auth-bash/auth.sh "$@"; [[ -r "$HOME/.aws/sessiontoken"
]] && . "$HOME/.aws/sessiontoken"; }
source $(dirname $(gem which colorls))/tab_complete.sh
alias lc='colorls -lA --sd'
alias ls=lc
alias cat=ccat
eval $(thefuck --alias)
