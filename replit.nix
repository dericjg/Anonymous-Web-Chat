{ pkgs }: {
	deps = [
		pkgs.postgresql_14
  pkgs.nodejs-18_x
    pkgs.nodePackages.typescript-language-server
    pkgs.yarn
    pkgs.replitPackages.jest
	];
}